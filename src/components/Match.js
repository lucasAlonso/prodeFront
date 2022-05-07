import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Match({ team1, team2, group, matchId, onChangeUpdate }) {
  const [selectedOption, setSelectedOption] = useState("");
  const ContainerMatch = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 2fr 1fr 2fr;
  `;
  const Country1 = styled.h1`
    font-size: 1.5em;
    text-align: ${selectedOption == team1 ? "right" : "center"};
    color: #17bebb;
    margin-right: 1.5em;
  `;
  const Country2 = styled.h1`
    font-size: 1.5em;
    text-align: ${selectedOption == team2 ? "left" : "center"};
    color: #e4572e;
    margin-left: 1.5em;
  `;
  const Select = styled.select`
    color: ${selectedOption == "" ? "#76b041" : "#2E282A"};
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    height: 42px;
    outline: 0;
    border: 0;
    border-radius: 0;
    background: ${selectedOption == ""
      ? "#2E282A"
      : selectedOption == team1
      ? "#17BEBB"
      : selectedOption == "Tide"
      ? "#FFC914"
      : "#E4572E"};
    font-size: 1em;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
    text-align: center;
  `;
  const ContentSelect = styled.div`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  `;
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    //onChangeUpdate(e);
  };

  return (
    <ContainerMatch>
      <Country1>{team1}</Country1>
      <ContentSelect>
        <Select
          id={group + matchId}
          multiple={false}
          onChange={handleChange}
          value={selectedOption}
        >
          <option disabled value="">
            ?
          </option>
          <option value={team1}>{team1} Wins</option>
          <option value="Tide">Both teams are loosers</option>
          <option value={team2}>{team2} Wins</option>
        </Select>
      </ContentSelect>
      <Country2>{team2}</Country2>
    </ContainerMatch>
  );
}

export default Match;
