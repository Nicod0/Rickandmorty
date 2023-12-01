import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <nav className={style.container}>
      <div className={style.links}>
        <Link to="/about">
          <h4 className={style.link}>About</h4>
        </Link>
        <Link to="/home">
          <h4 className={style.link2}>Home</h4>
        </Link>
        <Link to="/favorites">
          <h4 className={style.link3}>Favorites</h4>
        </Link>
      </div>
      <div className={style.searchbar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
