import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import slugify from "slugify";
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    description: { description, id },
  } = data.contentfulRecipe;
  console.log(title);
  const slug = slugify(title, { lower: true });
  console.log(id);
  const linkConnect = `https://workingwithgatsbytailwindmain.gatsbyjs.io/${slug}`;
  console.log(linkConnect);
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
          class="snipcart-add-item"
          data-item-id={id}
          data-item-price="99.99"
          data-item-url={linkConnect}
          data-item-description={description}
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
