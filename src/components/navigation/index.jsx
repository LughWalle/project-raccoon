import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { isAuthenticated } from "services/auth";
import ProjectContext from "context/ProjetoContext";

const LINKS = [
  {
    name: "Lorem ipsum",
    path: "/products",
    key: "link",
  },
  {
    name: "Lorem ipsum",
    path: "/products",
    key: "link1",
  },
  {
    name: "Lorem ipsum",
    path: "/products",
    key: "link3",
  },
];

function NavAnchor({ path, children }) {
  const { setIsOpen } = useContext(ProjectContext);
  const verifyToken = (e) => {
    if (!isAuthenticated()) {
      e.preventDefault();
      setIsOpen(true);
    } 
  };
  return (
    <a
      onClick={verifyToken}
      className={`${styles.navAnchor} ${styles.underLine}`}
      href={path}
    >
      {children}
    </a>
  );
}

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path, key }) => (
          <li key={key}>
            <NavAnchor path={path}>{name}</NavAnchor>
          </li>
        ))}
      </ul>
    </nav>
  );
}
