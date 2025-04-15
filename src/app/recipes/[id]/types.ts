export type RecipeDetailsProps = {
  params: {
    id: string;
  };
};

export type Ingredient = {
  id: number;
  original: string;
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: Ingredient[];
};
