import { useState } from "react";

interface NavbarProps {
  categories: string[]; // array of category names
  onSelectCategory: (category: string) => void; // callback to notify parent of selected category
  onSearch: (keyword: string) => void;
}

export default function Navbar({ categories, onSelectCategory, onSearch }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false); // toggle state for search input visibility
  const [searchedTerm, setSearchedTerm] = useState("");
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        const trimmed = searchedTerm.trim();
        if (trimmed) {
            onSearch(trimmed)
            setSearchedTerm("");
        }
    }
  }

  return (
    <nav className="border-y-4">
      {/* --- Container for all navbar content --- */}
      <div className="max-w-full flex flex-wrap items-center mx-auto justify-between lg:grid lg:grid-cols-3">
        {/* --- Left side: Search --- */}
        <div className="flex order-1 w-4/5 md:w-6/7 lg:order-3 lg:col-span-full lg:max-w-screen-lg lg:mx-auto">
          {/* --- Mobile search input (shown only on mobile) --- */}
          <div className={`w-full lg:border-t lg:border-double ${
              showSearch ? "lg:block" : "lg:hidden"}`}>
            <input
              type="text"
              id="mobile-search-navbar"
              className="bg-transparent block w-full text-md text-gray-900 dark:placeholder-stone-400 border-none py-0 my-0 lg:my-2"
              placeholder="Search article..."
              value={searchedTerm}
              onChange={(e) => setSearchedTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        {/* --- Right side: Search toggle + Mobile menu --- */}
        <div className="flex order-2 justify-end lg:col-start-3">
          {/* --- Search toggle button (desktop & mobile) --- */}
          <button
            type="button"
            onClick={() => setShowSearch((v) => !v)} // toggle search visibility
            data-collapse-toggle="navbar-search"
            aria-controls="desktop-search"
            aria-expanded={showSearch}
            className="text-gray-500 dark:text-gray-400 rounded-lg text-sm"
          >
            {/* Search icon */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Toggle Search</span>
          </button>

          {/* --- Desktop search input (hidden by default, shown when toggle clicked) --- */}
          <div
            id="desktop-search"
            className={`relative hidden ${
              showSearch ? "lg:block" : "lg:hidden"
            }`}
          >
            {/* Search icon inside input */}
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div> */}

            {/* Input field */}
            {/* <input
              type="text"
              id="search-navbar"
              className="bg-transparent block w-full p-2 ps-10 text-sm text-gray-900 dark:placeholder-gray-400 outline-none p-0 m-0 h-8"
              placeholder="Search..."
            /> */}
          </div>

          {/* --- Mobile hamburger menu --- */}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-stone-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* --- Center / Left side: Links & Mobile search --- */}
        <div
          className="items-center justify-center hidden w-full order-2 lg:flex lg:w-auto lg:col-start-2 lg:order-1 lg:z-0"
          id="navbar-search"
        >
          {/* --- Navbar links --- */}
          <hr className="pt-2" />
          <ul className="flex flex-col ld:p-2 font-medium lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:border-gray-700">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className="chonburi uppercase block py-2 px-3 text-stone-700 text-lg rounded-sm lg:hover:text-blue-700 lg:p-0 dark: lg:dark:hover:text-stone-500"
                  onClick={() => onSelectCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
