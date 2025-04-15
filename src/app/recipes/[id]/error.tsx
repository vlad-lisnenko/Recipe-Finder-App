"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-8 text-center text-red-500">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        className="p-8  text-amber-400 underline cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
