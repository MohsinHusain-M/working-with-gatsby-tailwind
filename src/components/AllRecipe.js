import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import slugify from "slugify";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        image {
          title
          id
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        cookTime
        content {
          tags
        }
        title
        id
      }
    }
  }
`;

const AllRecipe = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  console.log(recipes);
  return (
    <div>
      {recipes.map((recipe) => {
        const { id, title, image, cookTime } = recipe;
        const slug = slugify(title, { lower: true }); //This makes usable string for URL
        return (
          <div>
            <Link key={id} to={`/${slug}`}>
              <GatsbyImage image={image.gatsbyImageData} alt={title} />
              <p>{title}</p>
              <p>Cooking time :{cookTime}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllRecipe;
