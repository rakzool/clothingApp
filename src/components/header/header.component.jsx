import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import Classes from "./header.module.scss";

export default function Header() {
  return (
    <div className={Classes.header}>
      <Link to="/" className={Classes.logoContainer}>
        <Logo className={Classes.logo} />
      </Link>
      <div className={Classes.options}>
        <Link className={Classes.option} to="/shop">
          SHOP
        </Link>
        <Link className={Classes.option} to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
