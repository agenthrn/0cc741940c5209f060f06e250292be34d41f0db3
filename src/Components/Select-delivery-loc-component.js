import React from "react";
import styled from "styled-components";

const Location = styled.span`
  display: block;
  color: "#6e7679";
  font-size: 10px;
`;

const LocationName = styled.span`
  display: block;
  font-size: 18px;
  color: "#424749";
  font-weight: 600;
`;

const DeliverySection = styled.section`
  margin: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.3fr 2fr;
`;

const LocationColumn = styled.section`
  flex-direction: column;
`;

function SelectDelivery() {
  return (
    <DeliverySection>
      <span class="material-icons">arrow_back</span>
      <LocationColumn>
        <Location>ALAMAT PENGANTARAN</Location>
        <LocationName>
          Tokopedia Tower <span class="material-icons">expand_more</span>
        </LocationName>
      </LocationColumn>
    </DeliverySection>
  );
}

export default SelectDelivery;
