import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components";

interface IBlogProps {
  data: { allFile: { nodes: blog[] } };
}

type blog = {
    name: string;
}

const Blog = ({ data }: IBlogProps) => {
  // const data = useStaticQueryy();
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((blog) => (
          <li key={blog.name}> {blog.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query Blogs {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
