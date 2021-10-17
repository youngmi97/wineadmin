import React from "react";
import styled from "styled-components";
// import { FaWineGlassAlt } from "react-icons/fa";
import { themeColor, hoverEffect } from "../utils";
import WineImage from "../assets/bottle_example.png";

//pass list of wines from props
// populate Winecard as many as items from props.items

function WineSuggestionColumn(props) {
  return (
    <WineTypeCard themeColor={props.themeColor} textColor={props.textColor}>
      <CardContent>
        {/* <Chart>
          <FaWineGlassAlt />
        </Chart> */}
        <Earning>{props.name}</Earning>
        {props.items.map((data) => (
          <WineCard>
            <SubContainer>
              <Avatar>
                <img src={WineImage} alt="" />
              </Avatar>
              <SubContainerColumn>
                <TextContainer>{data.DISPLAY_NAME}</TextContainer>
                <TextContainerOrigin>
                  {data.COUNTRY}, {data.REGION}
                </TextContainerOrigin>
              </SubContainerColumn>
            </SubContainer>
          </WineCard>
        ))}
      </CardContent>
    </WineTypeCard>
  );
}

const WineTypeCard = styled.div`
  height: 100%;
  width: 14rem;
  /* background-color: ${(props) => props.themeColor}; */
  background-color: #cbc3e3;
  padding: 1rem;
  border-radius: 1rem;
  /* color: ${(props) => props.textColor}; */
  color: black;
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

const WineCard = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 7em;
  color: black;
  font-size: x-small;
  border-radius: 1rem;
  border-color: black;
  background: linear-gradient(to bottom right, white 30%, #e6e4ff 70%);

  /* background-color: white; */
  box-shadow: black;
  border-style: none;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 9rem;
    font-size: medium;
  }
`;

const Avatar = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 4rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 6rem;
      height: 6rem;
    }
  }
`;

const TextContainer = styled.div`
  margin-top: 3%;
  font-size: xx-small;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 100%;
    font-size: medium;
    margin-top: 5%;
  }
`;

const TextContainerOrigin = styled.div`
  font-weight: 700;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 100%;
  }
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const SubContainerColumn = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const Earning = styled.h2`
  text-align: center;
`;

export default WineSuggestionColumn;
