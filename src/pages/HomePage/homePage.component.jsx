import React from "react";
import Styles from "./homepage.module.scss";
import Directory from "../../components/directory/directory.component";
export default function Homepage() {
  return (
    <div className={Styles.homepage}>
      <Directory />
    </div>
  );
}
