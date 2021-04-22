import React from "react";
import styled from "styled-components";

const Location = styled.span`
  display: block;
  color: #6e7679;
  font-size: 8px;
`;

const LocationName = styled.span`
  display: block;
  font-size: 16px;
  color: #424749;
  font-weight: 600;
`;

const DeliverySection = styled.section`
  margin: 16px 0 8px 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.2fr 2fr;
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
