import React, { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";

import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import SearchLocation from "./Search-loc-component";

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

const BottomSheetBody = styled.section`
  margin: 16px;
`;

const BottomSheetHeader = styled.section`
  float: right;
  font-size: 16px;
  color: #6e7679;
  padding: 8px;
`;

const BottomSheetTitle = styled.h2`
  color: #6e7679;
`;

const BottomSheetSearch = styled.section`
  border: 1px solid #6e7679;
  display: grid;
  align-items: center;
  grid-template-columns: 0.1fr 1fr;
  padding: 8px;
`;

const BottomSheetSearchBox = styled.input`
  border: 0;
  width: 100%;
  line-height: 40px;
`;

function SelectDelivery() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { selected_location, loading, getLocationData, location_data } = useContext(
    AppContext
  );

  return (
    <DeliverySection>
      <span class="material-icons">arrow_back</span>
      <LocationColumn>
        <Location>ALAMAT PENGANTARAN</Location>
        <LocationName onClick={() => setIsBottomSheetOpen(true)}>
          {selected_location} <span class="material-icons">expand_more</span>
        </LocationName>
      </LocationColumn>
      <SwipeableBottomSheet overflowHeight={0} open={isBottomSheetOpen}>
        <BottomSheetBody>
          <BottomSheetHeader>
            <span
              class="material-icons"
              onClick={() => setIsBottomSheetOpen(false)}
            >
              close
            </span>
          </BottomSheetHeader>
          <BottomSheetTitle>
            Cek makanan yang tersedia di lokasi kamu!
          </BottomSheetTitle>
          <BottomSheetSearch>
            <span class="material-icons">location_on</span>
            <BottomSheetSearchBox
              onChange={(e) => getLocationData(e.target.value)}
            />
          </BottomSheetSearch>
          {!loading &&
            location_data &&
            location_data.map((location) => (
              <SearchLocation
                locationName={location.locationName}
                location={location.location}
              />
            ))}
        </BottomSheetBody>
      </SwipeableBottomSheet>
    </DeliverySection>
  );
}

export default SelectDelivery;
