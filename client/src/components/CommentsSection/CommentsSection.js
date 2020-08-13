import React, { useCallback, useEffect, useContext } from "react";
import {
  ImageUploadContext,
  CommentsContext,
  LoadingContext,
} from "../../Store";
import styles from "./commentssection.module.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
require("dotenv").config();
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_PRESET = process.env.REACT_APP_PRESET;
const REACT_APP_SIGNATURE = process.env.REACT_APP_SIGNATURE;

function ImageUploader({ title, name }) {
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  const [comments, setComments] = useContext(CommentsContext);
  const [files, setFiles] = useContext(ImageUploadContext);
  const maxSize = 5048576;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComments((state) => ({ ...state, [name]: value }));
  };
  const getBlobData = (file) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    setIsLoading(true);
    axios({
      method: "get",
      url: file, // blob url eg. blob:http://127.0.0.1:8000/e89c5d87-a634-4540-974c-30dc476825cc
      responseType: "blob",
    }).then(function (response) {
      var reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = function () {
        var base64data = reader.result;
        const formData = new FormData();
        formData.append("file", base64data);
        formData.append("api_key", REACT_APP_API_KEY);
        // replace this with your upload preset name
        formData.append("upload_preset", REACT_APP_PRESET);
        axios({
          method: "POST",
          headers,
          url: `https://api.cloudinary.com/v1_1/dgfbxfa67/upload/${REACT_APP_SIGNATURE}`,
          data: formData,
        })
          .then((res) => {
            const imageURL = res.data.url;
            setIsLoading(false);
            return files[name]
              ? setFiles((state) => ({
                  ...state,
                  [name]: [...state[name], imageURL],
                }))
              : setFiles((state) => ({
                  ...state,
                  [name]: [imageURL],
                }));
          })
          .catch((err) => {
            console.log(err);
          });
      };
    });
  };
  const onDrop = useCallback(
    (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      getBlobData(mappedFiles[0].preview);
    },
    [files, name]
  );
  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    minSize: 0,
    maxSize: 10000000,
  });
  const isFileTooLarge = rejectedFiles
    ? rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize
    : null;
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure";
      return files[name]
        ? files[name].forEach((file) => URL.revokeObjectURL(file.preview))
        : null;
    },
    [files]
  );
  return (
    <div>
      <p>Please include comments in notes</p>
      <hr className={styles["HR"]} />
      <div className={styles["UploadForm"]}>
        <div className={styles["UploadWrapper"]}>
          <h5>Upload photos of issues found in the {title}</h5>
          <section className={styles["Container"]}>
            <div className={styles["ImageInput"]} {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop it like it's hot!"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">File is too large.</div>
              )}
            </div>
          </section>
          <div>
            {files[name]
              ? files[name].map((object, index) => {
                  return (
                    <img
                      style={{ height: "80px" }}
                      className={styles["RenderedImage"]}
                      key={index}
                      src={object}
                    />
                  );
                })
              : null}
          </div>
          <p>
            Please take a picture of any issues that you find and upload them
            here. NOTE: it is only necessary to upload pictures of problems that
            you find.
          </p>
        </div>
        <div className={styles["CommentWrapper"]}>
          <h5>Notes of the {title}</h5>
          <textarea
            name={name}
            value={comments[name]}
            onChange={handleChange}
            className={styles["Textarea"]}
          />
        </div>
      </div>
    </div>
  );
}
export default ImageUploader;
