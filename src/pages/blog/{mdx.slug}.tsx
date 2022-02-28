import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../../components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        name: string;
        date: string;
        hero_image_alt: string;
        hero_image_credits_text: string;
        hero_image_credits_link: string;
        hero_image: ImageDataLike;
      };
      body: any;
    };
  };
}

const BlogPost = ({ data }: IBlogPostProps) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log("🚀 ~ file: {mdx.slug}.tsx ~ line 25 ~ BlogPost ~ image", image);
  return (
    <Layout pageTitle="Super Cool Blog Post">
      <p>Posted: {data.mdx.frontmatter.date}</p>
      {image && <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>

      <p>
        <a href={data.mdx.frontmatter.hero_image_credits_link}>{data.mdx.frontmatter.hero_image_credits_text}</a>
      </p>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        date(formatString: "DD/MMMM/YYYY")
        hero_image_alt
        hero_image_credits_text
        hero_image_credits_link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
