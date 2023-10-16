import { SearchIcon } from "./custom-icons";

const Search = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex items-center px-6 rounded-md ${className}`}>
      <SearchIcon className="mr-2 h-5 w-5 text-xl text-primary-gray " />
      <input
        placeholder="Search for product, brand, colour etc."
        className="w-full bg-transparent text-sm placeholder:primary-gray focus:outline-none"
      />
    </div>
  );
};

export default Search;
