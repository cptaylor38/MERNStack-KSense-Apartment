import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./imageuploader.module.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function ImageUploader(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div>
      <p>Please include comments in notes</p>
      <hr className={styles["HR"]} />
      <form className={styles["UploadForm"]}>
        <div className={styles["UploadWrapper"]}>
          <h5>Upload photos of issues found in the kitchen</h5>
          <section className={styles["Container"]}>
            <div
              id={styles["Dropzone"]}
              {...getRootProps({ className: "dropzone" })}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
              <button
                className={styles["UploadBtn"]}
                type="button"
                onClick={open}
              >
                Select Files
              </button>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
          </section>
          <p>
            Please take a picture of any issues that you find and upload them
            here. NOTE: it is only necessary to upload pictures of problems that
            you find.
          </p>
        </div>
        <div className={styles["CommentWrapper"]}>
          <h5>Notes of the kitchen</h5>
          <textarea className={styles["Textarea"]} />
        </div>
      </form>
    </div>
  );
}

export default ImageUploader;
