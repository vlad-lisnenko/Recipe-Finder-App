export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="p-8 max-w-2xl w-full mx-auto bg-gray-100 rounded-xl shadow animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-2/3 mb-4"></div>
        <h2 className="h-6 bg-gray-300 rounded w-1/4 mb-2"></h2>
        <ul className="space-y-2">
          <li className="h-4 bg-gray-300 rounded w-5/6"></li>
          <li className="h-4 bg-gray-300 rounded w-5/6"></li>
          <li className="h-4 bg-gray-300 rounded w-5/6"></li>
          <li className="h-4 bg-gray-300 rounded w-5/6"></li>
        </ul>
        <div className="mt-4 text-sm space-y-2">
          <p className="h-4 bg-gray-300 rounded w-1/4"></p>
          <p className="h-4 bg-gray-300 rounded w-1/4"></p>
        </div>
      </div>
    </div>
  );
}
