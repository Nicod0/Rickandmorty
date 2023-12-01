import Cards from "../Cards/Cards";
import style from "./Home.module.css";

export default function Home(props) {
  return (
    <div>
      <h1 className={style.title}>Cartas</h1>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
