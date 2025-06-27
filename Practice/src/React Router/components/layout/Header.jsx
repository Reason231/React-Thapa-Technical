import { space } from "postcss/lib/list";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/">{({isActive}) => (
            <span className={isActive ? "bg-red-600":""}>Home</span>
          )}</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
        </li>
        <li>
          <NavLink to="/movie" className="hover:text-gray-300">Movie</NavLink>
        </li>
      </ul>
    </nav>
  );
};
