import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
        InventAI
      </h1>
      <p className="mb-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
        InventAI is a comprehensive toolkit that leverages AI to streamline game
        development. It features a versatile C# SDK for various game development
        environments, a Unity library for generating game assets (sprites,
        textures, 3D models), and a web-based tool for crafting interactive
        narratives with contextual story choices in Ren'Py.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          href="/docs"
          className="px-6 py-2 rounded bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:bg-gray-300"
        >
          Documentation
        </Link>
      </div>
    </main>
  );
}
