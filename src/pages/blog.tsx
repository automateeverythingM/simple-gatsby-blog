import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components";

interface IBlogProps {
  data: { allMdx: { nodes: blog[] } };
}

type blog = {
  frontmatter: {
    name: string;
    date: string;
  };
  body: any;
  id: string;
};

const Blog = ({ data }: IBlogProps) => {
  console.log("🚀 ~ file: blog.tsx ~ line 15 ~ Blog ~ data", data);
  // const data = useStaticQueryy();
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allMdx.nodes.map((data) => (
          <li key={data.id}>
            <h3>{data.frontmatter?.name}</h3>
            <div>{data.frontmatter?.date}</div>
            <MDXRenderer>{data.body}</MDXRenderer>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query Blogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          name
          date(formatString: "DD-MMMM-YYYY")
        }
        id
        body
      }
    }
  }
`;
