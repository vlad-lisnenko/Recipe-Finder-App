const skeletons = Array.from({ length: 20 });

export default function Loading() {
  return (
    <main className="min-h-screen p-8 bg-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {skeletons.map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-200 rounded-xl">
            <div className="bg-gray-300 h-48 w-full rounded-xl" />
            <div className="p-4 ">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
