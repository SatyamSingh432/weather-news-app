import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[120px] w-25 bg-[rgb(13,14,55)] text-white p-2 flex flex-col gap-4">
      <div
        onClick={() => navigate("/news")}
        className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
      >
        News
      </div>
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
      >
        Weather
      </div>
    </div>
  );
};

export default Sidebar;
