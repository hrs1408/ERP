import { BsSearch } from 'react-icons/bs';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="flex w-full items-center lg:w-auto">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BsSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 "
          placeholder="Search"
          required
        />
      </div>
      <button
        type="submit"
        className="ml-2 rounded-lg border p-2.5 text-sm font-medium transition-all hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-4 focus:ring-blue-300 "
      >
        <BsSearch size={20} />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchInput;
