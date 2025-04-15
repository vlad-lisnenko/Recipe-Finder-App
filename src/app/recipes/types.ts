export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type RecipesPageProps = {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxTime?: string;
  };
};
