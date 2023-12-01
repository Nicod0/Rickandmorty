import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  console.log(id);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/detail/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  console.log(character);
  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
