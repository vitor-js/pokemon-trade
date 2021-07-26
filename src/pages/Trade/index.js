// packages
import React, { useState, useEffect } from "react";

// Components
import { Container } from "./styles";
import { Row, Col, Table } from "react-bootstrap";

import ModalSelect from "../../components/modal";
import { toast } from "react-toastify";

function Login() {
  const [isModalSelectVisible, setIsModalSelectVisible] = useState(false);
  const [team, setTeam] = useState([]);
  const [typeTeam, setTypeTeam] = useState("");
  const [isValid, setIsValid] = useState({
    blue: [],
    red: [],
  });

  const [history, setHistory] = useState([]);

  const handleOpenModalSelectRed = () => {
    setTypeTeam("redTeam");
    setIsModalSelectVisible(true);
  };

  const handleOpenModalSelectBlue = () => {
    setTypeTeam("blueTeam");
    setIsModalSelectVisible(true);
  };

  const handleTrader = (e) => {
    try {
      e.preventDefault();
      let blueScore = 0;
      let redScore = 0;
      const arrayPoke = team;

      const blueTeam = arrayPoke.filter((data) => data.team === "blueTeam");
      const redTeam = arrayPoke.filter((data) => data.team === "redTeam");

      for (let i = 0; i < blueTeam.length; i++) {
        blueScore = blueScore + blueTeam[i].xp;
      }

      for (let i = 0; i < redTeam.length; i++) {
        redScore = redScore + redTeam[i].xp;
      }

      let totalScore = Math.abs(blueScore - redScore);

      if (totalScore <= 50) {
        const data = {
          scoreBlue: blueScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: "Troca Efetuada com Sucesso",
        };
        let totalHistory = history;
        totalHistory.push(data);
        setHistory([...totalHistory]);
        toast.success("Troca efetuada com sucesso!");
      } else {
        const data = {
          scoreBlue: blueScore,
          scoreRed: redScore,
          scoreTotal: totalScore,
          tradeStatus: "Troca inválida",
        };
        let totalHistory = history;
        totalHistory.push(data);
        setHistory([...totalHistory]);
        toast.error("Troca inválida");
      }
    } catch {
      toast.error("Erro ao adicionar pokemon. Tente novamente.");
    }
  };

  useEffect(() => {
    handleValidadeClick();
    console.log(history);
  }, [team]);

  const handleValidadeClick = () => {
    console.log(team);
    const arrayPoke = team;
    const filterBlue = arrayPoke.filter((data) => data.team === "blueTeam");
    const filterRed = arrayPoke.filter((data) => data.team === "redTeam");

    setIsValid({
      ...isValid,
      blue: filterBlue,
      red: filterRed,
    });
  };

  return (
    <>
      <Container>
        {isModalSelectVisible === true ? (
          <ModalSelect
            onClose={() => setIsModalSelectVisible(false)}
            type={typeTeam}
            team={team}
            setTeam={setTeam}
          />
        ) : null}
        <Row className="container-team">
          <Col md={10}>
            <h1 className="mb-5 text-center">
              Escolha seu time e realize a troca{" "}
            </h1>
          </Col>
          <Col
            className="team blue"
            onClick={() => handleOpenModalSelectBlue()}
            md={4}
          >
            <h4 className="mb-3">Clique para selecionar o time Azul</h4>
            <div className="modal-pokemons-selecteds">
              {team.length !== 0 ? (
                <>
                  <Row>
                    {team.map((data) => (
                      <>
                        {data.team === "blueTeam" && (
                          <Col md={4}>
                            <div className="card m-1 p-3">
                              <img src={data.img} alt="pokemon" />
                              <div className="pokemon-info">
                                <p className="m-0">{data?.name}</p>
                                <p className="m-0">{data?.xp} xp</p>
                              </div>
                            </div>
                          </Col>
                        )}
                      </>
                    ))}
                  </Row>
                </>
              ) : null}
            </div>
          </Col>
          <Col
            onClick={() => handleOpenModalSelectRed()}
            className="team red"
            md={4}
          >
            <h4 className="mb-3">Clique para selecionar o time vermelho</h4>
            {team.length !== 0 ? (
              <Row>
                {team.map((data) => (
                  <>
                    {data.team === "redTeam" && (
                      <Col md={4}>
                        <div className="card m-1 p-3">
                          <img src={data.img} alt="pokemon" />
                          <div className="pokemon-info">
                            <p className="m-0">{data?.name}</p>
                            <p className="m-0">{data?.xp} xp</p>
                          </div>
                        </div>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            ) : null}
          </Col>
          <Col md={10} className="text-center">
            <button
              disabled={isValid.blue.length === 0 || isValid.red.length === 0}
              onClick={(e) => handleTrader(e)}
              className="mt-5 text-center"
            >
              Trocar
            </button>
          </Col>
          <Col md={7} className="mt-5">
            <Table bordered>
              {history.length !== 0 && (
                <>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>XP time Azul</th>
                      <th>XP time Vermelho</th>
                      <th>Diferença</th>
                      <th>Staus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((item, index) => (
                      <tr>
                        {console.log(item, index)}
                        <th scope="row">{index}</th>
                        <td>{item.scoreBlue}</td>
                        <td>{item.scoreRed}</td>
                        <td>{item.scoreTotal}</td>
                        <td>{item.tradeStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
