import { graphql, Link, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../../components";

interface IBlogProps {
  data: { allMdx: { nodes: blog[] } };
}

type blog = {
  frontmatter: {
    name: string;
    date: string;
  };
  slug: any;
  id: string;
};

const Blog = ({ data }: IBlogProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {data.allMdx.nodes.map((data) => (
        <article key={data.id}>
          <Link to={data.slug}>
            <h3>{data.frontmatter?.name}</h3>
          </Link>
          <p>Posted: {data.frontmatter?.date}</p>
        </article>
      ))}
      S{" "}
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
        slug
      }
    }
  }
`;
