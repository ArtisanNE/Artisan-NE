import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

function Sidebar({ selectedCategories, setSelectedCategories }) {
  const [isOpen, setIsOpen] = useState(true);

  const categories = [
    "Weaving",
    "Bamboo & Cane Crafts",
    "Pottery & Terracotta",
    "Wood Carving",
    "Handmade Jewelry",
    "Textiles",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <motion.aside
      className="w-64 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Filter size={20} /> Filters
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor={category}
                  className="text-gray-800 dark:text-gray-300 cursor-pointer"
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.aside>
  );
}

export default Sidebar;
