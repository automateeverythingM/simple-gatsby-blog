import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkText } from "./layout.module.scss";

interface ILayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export const Layout = ({ pageTitle, children }: ILayoutProps) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
