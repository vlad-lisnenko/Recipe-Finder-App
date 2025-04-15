import { Recipe, RecipeDetailsProps } from "./types";

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
  const { id } = params;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`;

  //for effects loading
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await fetch(url);
  const recipe = (await data.json()) as Recipe;

  return (
    recipe && (
      <main className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="p-8 w-full max-w-2xl mx-auto bg-white rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {recipe.title}
          </h1>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            🧂 Ingredients:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.extendedIngredients.map((ing, index) => (
              <li key={index}>{ing.original}</li>
            ))}
          </ul>

          <div className="text-gray-700 mt-4 text-sm">
            <p>
              <strong>⏱ Ready in:</strong> {recipe.readyInMinutes} minutes
            </p>
            <p>
              <strong>🍽 Servings:</strong> {recipe.servings}
            </p>
          </div>
        </div>
      </main>
    )
  );
}
