
import { Link } from "react-router-dom";
import style from "./Nav.module.css"; 
import SearchBar from "../SearchBar/SearchBar";


export default function Nav({ onSearch }) {
  return (
    
    <nav className={style.nav_container}>
      <Link to = "/home"><h2><span>Rick</span> and <span>Morty</span></h2></Link>
      <div className={style.links}>
        <Link to = "/about">About</Link>
        <Link to = "/favorites">Favorites</Link>
      </div>
      <div className={style.searchbar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
