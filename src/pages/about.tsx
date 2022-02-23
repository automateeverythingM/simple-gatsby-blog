import React from "react";
import { Layout } from "../components";

interface IAboutProps {}

const About = ({}: IAboutProps) => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there! I`m the proud creator of this site, which i build with Gatsby.</p>
    </Layout>
  );
};

export default About;
