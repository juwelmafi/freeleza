import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router";
import { Slide } from "react-awesome-reveal";
const CategoryCard = ({task}) => {
  const {category} = task;
  const noSpaceCat = category.replace(/\s+/g, "");
  return (
     <Slide>
      <div>
      <Link to={`/browse-task/${noSpaceCat}`}>
        <div className="flex items-center justify-between border border-gray-50 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3">
        <div>
          <h3 className=" font-semibold">
            {category}
          </h3>
        </div>
      </div>
      <FiChevronRight className="text-gray-400 w-6 h-6" />
    </div>
      </Link>
    </div>
    </Slide>
  );
};

export default CategoryCard;