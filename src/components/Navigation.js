import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as LogoSVG } from "../assets/nearpod-logo.svg";

const Navigation = () => {
  return (
    <Container>
      <HomeSVG /> <LogoSVG />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1.6rem;

  border-bottom: 1px solid #eaeef1;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.28);

  width: 100%;
  height: 8.9rem;

  .nearpod-logo {
    margin-left: 1rem;
  }
`;

export default Navigation;
