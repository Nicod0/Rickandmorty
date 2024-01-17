// import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <article className={style.container}>
      <div className={style.links}>
        <div className={style.home}>
          <Link to="/home">
            <h4 className={style.home_link}>Home</h4>
          </Link>
        </div>
        <div className={style.navigation}>
          <Link to="/about">
            <h4 className={style.link}>About</h4>
          </Link>
          <Link to="/favorites">
            <h4 className={style.link3}>Favorites</h4>
          </Link>
        </div>
      </div>
      {/* <div className={style.searchbar}>
        <SearchBar onSearch={onSearch} />
      </div> */}
    </article>
  );
}
