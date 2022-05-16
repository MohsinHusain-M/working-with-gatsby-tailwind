import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    description: { description },
  } = data.contentfulRecipe;
  console.log(title);
  console.log(description.id);
  console.log("https://workingwithgatsbytailwindmain.gatsbyjs.io/{$title}");
  return (
    <Layout>
      <div>
        <p>{title}</p>
        <GatsbyImage
          image={data.contentfulRecipe.image.gatsbyImageData}
          alt={title}
        />
        <p>{cookTime}</p>
        <p>{description}</p>
      </div>
      <div>
        <button
          data-item-id={description.id}
          data-item-price="99.99"
          data-item-url="https://workingwithgatsbytailwindmain.gatsbyjs.io/{$title}"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image=""
          data-item-name={title}
        >
          Add to cart
        </button>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        id
        description
      }
    }
  }
`;
export default RecipeTemplate;
