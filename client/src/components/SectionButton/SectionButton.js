// import React, { useState } from "react";
// import FontAwesome from "react-fontawesome";
// import { Button } from "reactstrap";
// import styles from "./sectionbutton.module.css";

// function SectionHeader({ setIsOpenChild, header }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div>
//       <Button
//         className={styles["CollapseBtn"]}
//         onClick={toggle}
//         style={{ marginBottom: "1rem", width: "100%" }}
//       >
//         <p>{header}</p>
//         <FontAwesome
//           className="super-crazy-colors"
//           name="angle-up"
//           rotate={isOpen ? null : 180}
//           size="lg"
//           style={{
//             marginTop: "5px",
//             textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </Button>
//     </div>
//   );
// }

// export default SectionHeader;
