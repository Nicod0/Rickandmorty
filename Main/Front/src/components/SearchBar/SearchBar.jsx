import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input type="search" onChange={handleChange} className={style.input} />
      <button
        className={style.button}
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

