import React from "react";
import styled from "styled-components";
import { FaWineGlassAlt } from "react-icons/fa";
import { themeColor, hoverEffect } from "../utils";

function WineSuggestionColumn(props) {
  return (
    <EarningsCard themeColor={props.themeColor} textColor={props.textColor}>
      <CardContent>
        <Chart>
          <FaWineGlassAlt />
        </Chart>
        <Earning>{props.name}</Earning>
      </CardContent>
    </EarningsCard>
  );
}

const EarningsCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${(props) => props.themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: ${(props) => props.textColor};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    height: 40rem;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Earning = styled.h2`
  text-align: center;
`;

export default WineSuggestionColumn;
