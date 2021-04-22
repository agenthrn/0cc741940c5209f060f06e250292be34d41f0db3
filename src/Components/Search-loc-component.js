import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const Location = styled.span`
  display: block;
  color: #6e7679;
  font-size: 12px;
`;

const LocationName = styled.span`
  display: block;
  font-size: 16px;
  color: #424749;
  font-weight: 600;
`;

const LocationSection = styled.section`
  margin: 16px 0 8px 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.1fr 1fr;
`;

const LocationColumn = styled.section`
  flex-direction: column;
`;

function SearchLocation({ locationName, location }) {
  const { setSelectedLocation } = useContext(AppContext);

  return (
    <LocationSection onClick={() => {setSelectedLocation(locationName)}}>
      <span class="material-icons">location_on</span>
      <LocationColumn>
        <LocationName>{locationName}</LocationName>
        <Location>{location}</Location>
      </LocationColumn>
    </LocationSection>
  );
}

export default SearchLocation;
