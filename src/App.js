import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Fixture from "./qatar2022.json";
import React, { useState } from "react";
import WalletConect from "./components/WalletConect";
import Prode from "./components/Prode";

function App() {
  const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
    display: grid;
    height: 100vh;
    grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas:
      "nav nav nav nav"
      "sidebar main main main"
      "sidebar content content content"
      "sidebar footer footer footer";
    text-align: center;
    grid-gap: 0.25rem;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
      grid-template-areas:
        "nav"
        "sidebar"
        "main"
        "content"
        "footer";
    }
    color: #2e282a;
    font-family: "Press Start 2P", cursive;
  `;
  const ContentBox = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    grid-area: content;
    justify-content: center;
    @media (max-width: 550px) {
      flex-direction: column;
    }
  `;
  const NavBar = styled.nav`
    background: #3a3a55;
    grid-area: nav;
    padding: 0.25rem;
  `;
  const Main = styled.main`
    background: #1f2128;
    color: white;
    grid-area: main;
    padding: 0.25rem;
  `;
  const SideBar = styled.div`
    background: #9aaab7;
    grid-area: sidebar;
    padding: 0.25rem;
  `;

  const Footer = styled.footer`
    background: #ff9637;
    grid-area: footer;
    padding: 0.25rem;
  `;

  return (
    <Container>
      <NavBar>NavBar</NavBar>
      <Main>Main</Main>
      <SideBar>
        <WalletConect />
      </SideBar>
      <ContentBox>
        <Prode />
      </ContentBox>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
