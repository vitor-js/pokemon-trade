import React, { useState, useEffect } from "react";
import axios from "axios";

import { Modal } from "./styles";
import PokemonmCard from "../../components/pokemonCard";
import { MdAttachMoney } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function ModalComponent({
  id = "modalselect",
  onClose = () => {},
  type,
  setTeam,
  team,
}) {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const [results, setResults] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setResults(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    });
  }, [apiUrl]);

  const handleAddPokemon = (pokemon) => {
    try {
      const arrayPoke = team;
      const filterBlue = arrayPoke.filter((data) => data.team === "blueTeam");
      const filterRed = arrayPoke.filter((data) => data.team === "redTeam");
      if (type === "blueTeam" && filterBlue.length >= 6) {
        toast.error("Erro ao adicionar pokemon. Tente novamente.");
        return;
      }
      if (type === "redTeam" && filterRed.length >= 6) {
        toast.error("Erro ao adicionar pokemon. Tente novamente.");
        return;
      }
      axios.get(`${pokemon.url}`).then((res) => {
        const data = {
          id: Math.floor(10 * Math.random() + 1),
          img: res.data.sprites.front_default,
          name: res.data.name,
          xp: res.data.base_experience,
          team: type,
        };
        setTeam([...team, data]);
        toast.success("Pokemon adicionado com sucesso!");
      });
    } catch (err) {
      toast.error("Erro ao adicionar pokemon. Tente novamente.");
    }
  };

  const handleDeletePokemon = (id) => {
    let arrayPokemon = team;
    const index = arrayPokemon.findIndex((card) => card.id === id);
    arrayPokemon.splice(index, 1);
    setTeam([...arrayPokemon]);
  };

  return (
    <Modal
      id="modalselect"
      className="modalselect"
      onClick={handleOutsideClick}
    >
      <div className="modal-body">
        {team.length !== 0 ? (
          <div className="modal-pokemons-selecteds">
            <>
              <Row>
                {team.map((data) => (
                  <>
                    {data.team === type && (
                      <Col md={4}>
                        <div className="card m-1 p-3">
                          <img src={data.img} alt="pokemon" />
                          <div className="pokemon-info">
                            <p>{data?.name}</p>
                            <p>{data?.xp} xp</p>
                          </div>
                          <div className="button-remove">
                            <button
                              onClick={() => handleDeletePokemon(data.id)}
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </>
          </div>
        ) : null}
        {results.length !== 0 &&
          results.map((pokemon, index) => (
            <div onClick={() => handleAddPokemon(pokemon)}>
              <PokemonmCard data={pokemon} />
            </div>
          ))}
        <div className="button-container">
          <button
            onClick={() => setApiUrl(prevPage)}
            disabled={prevPage === null}
          >
            Anterior
          </button>
          <button onClick={() => setApiUrl(nextPage)}> Próximo </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalComponent;
