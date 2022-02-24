import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../components";

interface IHomePageProps {}

const HomePage = ({}: IHomePageProps) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I`m making this by following the Gatsby Tutorial.</p>
      <StaticImage
        formats={["auto", "avif", "webp"]}
        src="https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg"
        alt="Girl wearing virtual reality glasses"
      />
    </Layout>
  );
};

export default HomePage;
