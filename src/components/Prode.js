import React, { useState, useEffect } from "react";
import Match from "./Match";
import Fixture from "../qatar2022.json";
import styled from "styled-components";

function Prode() {
  const [prode, setProde] = useState({});
  const ContainerTitles = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 100vw;
    font-size: 1.5rem;
  `;
  const ContainerTitlesGrup = styled.div`
    grid-column: span 3;
    margin-bottom: 1rem;
    font-size: 2rem;
  `;

  function onChangeUpdate(e) {
    const { id, value } = e.target;
    setProde((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div>
      {Object.entries(Fixture.Groups).map(([key, value]) => {
        return (
          <div>
            <div centered="true">
              <ContainerTitles>
                <ContainerTitlesGrup> GRUPO {key}</ContainerTitlesGrup>
                <div>LOCAL </div>
                <div>RESULTADO </div>
                <div>VISITANTE </div>
              </ContainerTitles>
              <Match
                team1={value[0]}
                team2={value[1]}
                group={key}
                matchId="1"
                onChangeUpdate={onChangeUpdate}
              />

              <Match
                team1={value[2]}
                team2={value[3]}
                group={key}
                matchId="2"
                onChangeUpdate={onChangeUpdate}
              />

              <Match
                team1={value[0]}
                team2={value[2]}
                group={key}
                matchId="3"
                onChangeUpdate={onChangeUpdate}
              />
              <Match
                team1={value[1]}
                team2={value[3]}
                group={key}
                matchId="4"
                onChangeUpdate={onChangeUpdate}
              />
              <Match
                team1={value[0]}
                team2={value[3]}
                group={key}
                matchId="5"
                onChangeUpdate={onChangeUpdate}
              />
              <Match
                team1={value[1]}
                team2={value[2]}
                group={key}
                matchId="6"
                onChangeUpdate={onChangeUpdate}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Prode;
