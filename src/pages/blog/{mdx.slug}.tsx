import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../../components";

interface IBlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        date: string;
      };
      body: any;
    };
  };
}

const BlogPost = ({ data }: IBlogPostProps) => {
  return (
    <Layout pageTitle="Super Cool Blog Post">
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MMMM/YYYY")
      }
      body
    }
  }
`;
