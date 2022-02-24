import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.scss";

interface ILayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export const Layout = ({ pageTitle, children }: ILayoutProps) => {
  let data = useStaticQuery(
    graphql`
      query siteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { title = "" } = data?.site?.siteMetadata;

  return (
    <div className={container}>
      <title>
        {pageTitle} | {title}
      </title>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
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
