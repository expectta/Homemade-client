import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Recipe from "./Recipe";

const RecipeListContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: calc(100vh - 6rem);
`;

const RecipeListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function RecipeList({ recipes }) {
  return (
    <RecipeListContainer>
      <RecipeListWrap>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </RecipeListWrap>
    </RecipeListContainer>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumnailUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
      views: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
