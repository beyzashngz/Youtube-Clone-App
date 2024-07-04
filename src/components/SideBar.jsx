import { Link } from "react-router-dom";
import { categories } from "../constants";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const SideBar = () => {
  const {selectedCategory, setSelectedCategory }= useContext(VideoContext);
  
  return (
    <div  className=" overflow-y-auto flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
      <Link to={"/"} key={i} onClick={() => setSelectedCategory(item)}>
        <div className={`${selectedCategory.name === item.name && `bg-[#F2F2F2]`} flex gap-1 py-2 px-1 md:px-3  items-center md:text-lg cursor-pointer rounded-md hover:bg-[#F2F2F2]`} >
          <span className="max-md:text-2xl ">{item.icon}</span>
          <span className="max-md:hidden line-clamp-1">{item.name}</span>
        </div>
        {item.divider && <hr/>}
      </Link>
    ))}
    </div>
  );
};

export default SideBar;
