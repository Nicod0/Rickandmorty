import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useEffect } from "react";
import { getFavorites } from "../../Redux/actions";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
