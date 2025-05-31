import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const DropdownWithSearch = ({ data, selectedData, setSelectedData, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        <span className="mr-2">{selectedData || placeholder}</span>
        <RiArrowDownSLine />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
          >
            <input
              id="search-input"
              className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
              type="text"
              placeholder="Search items"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <span
                  key={item}
                  onClick={() => {
                    setSelectedData(item);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="block px-4 py-2 text-gray-400 cursor-default">
                No matches found
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownWithSearch;
