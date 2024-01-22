import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import Nav from "../Nav/Nav";

export default function Home(props) {
  return (
    <main className={style.container}>
      <Nav onSearch={props.onSearch} />
      <Cards characters={props.characters} onClose={props.onClose} />
    </main>
  );
}
