/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Recipe, RecipesPageProps } from "./types";

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { query = "", cuisine = "", maxTime = "" } = searchParams;

  if (!query && !cuisine && !maxTime) {
    redirect("/");
  }

  const params = new URLSearchParams({
    ...(query && { query }),
    ...(cuisine && { cuisine }),
    ...(maxTime && { maxReadyTime: maxTime }),
    number: "30",
    apiKey: process.env.SPOONACULAR_API_KEY!,
  });

  const url = `https://api.spoonacular.com/recipes/complexSearch?${params}`;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await fetch(url, {
    next: { revalidate: 60 },
  });

  const { results: recipes } = (await data.json()) as { results: Recipe[] };

  return (
    <main className="min-h-screen p-8 bg-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={250}
              className="rounded-t-xl w-full h-48 object-cover text-red-500"
            />
            <div className="p-4">
              <h2 className="text-lg h-4 font-semibold text-gray-500">
                {recipe.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
