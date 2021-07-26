import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import axios from "axios";

function PokemonCard({ data }) {
  const [poke, setPoke] = useState();

  useEffect(() => {
    axios.get(`${data.url}`).then((res) => {
      console.log(res.data);
      setPoke(res.data);
    });
  }, [data]);

  return (
    <Container>
      <div className="img-info">
        <img src={poke?.sprites?.front_default} alt="pokemon" />
      </div>
      <div className="pokemon-info">
        <p>Nome: {poke?.name}</p>
        <p>Xp: {poke?.base_experience}</p>
      </div>
    </Container>
  );
}

export default PokemonCard;
