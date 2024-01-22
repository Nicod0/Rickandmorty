const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ id, name, species, image, gender, origin, status }) => {
      if (name) {
        const character = {
          id,
          name,
          gender,
          species,
          image,
          status,
          origin: origin.name,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("not found");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = getCharDetail;
