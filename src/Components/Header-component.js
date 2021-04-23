import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import SelectDay from "./Select-day-component";

import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import SearchLocation from "./Search-loc-component";

const Location = styled.span`
  display: block;
  color: #6e7679;
  font-size: 8px;
`;

const LocationName = styled.span`
  font-size: 16px;
  color: #424749;
  font-weight: 600;
  display: flex;
  align-items: center;
  line-height: 10px;
`;

const DeliverySection = styled.section`
  padding: 16px 0 8px 16px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.2fr 2fr;
`;

const Header = styled.section`
  position: sticky;
  top: 0;
  background: white;
  width: 100%;
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

const TabSection = styled.section`
  margin: 0 16px 0 16px;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

const TabSectionChild = styled.section`
  color: #424749;
  padding: 8px 0 8px 0;
  background: white;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #f1f1f2;
  ${(props) =>
    props.active &&
    ` background: #424749;
      color: white;
    `}
`;

function AppHeader() {
  const {
    selected_location,
    selected_category,
    loading,
    getLocationData,
    location_data,
    setBottomSheetOpen,
    is_bottom_sheet_open,
    setSnackbarOpen,
    setSelectedCategory,
  } = useContext(AppContext);

  const [hideTabButton, setHideTabButton] = useState(false);
  let scroll_position = 0;
  let scroll_direction;

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      scroll_direction =
        document.body.getBoundingClientRect().top > scroll_position
          ? setHideTabButton(false)
          : setHideTabButton(true);
      scroll_position = document.body.getBoundingClientRect().top;
    });
  }, []);

  return (
    <Header>
      <DeliverySection>
        <span class="material-icons">arrow_back</span>
        <LocationColumn>
          <Location>ALAMAT PENGANTARAN</Location>
          <LocationName
            onClick={() => {
              setBottomSheetOpen(true);
              setSnackbarOpen(false);
            }}
          >
            {selected_location}{" "}
            <span style={{ color: "#f9423a" }} class="material-icons">
              expand_more
            </span>
          </LocationName>
        </LocationColumn>
      </DeliverySection>
      <SelectDay />
      {hideTabButton == false && (
        <TabSection>
          {selected_category == "lunch" ? (
            <>
              <TabSectionChild active>Lunch</TabSectionChild>
              <TabSectionChild
                onClick={() => {
                  setSelectedCategory("dinner");
                }}
              >
                Dinner
              </TabSectionChild>
            </>
          ) : (
            <>
              <TabSectionChild
                onClick={() => {
                  setSelectedCategory("lunch");
                }}
              >
                Lunch
              </TabSectionChild>
              <TabSectionChild active>Dinner</TabSectionChild>
            </>
          )}
        </TabSection>
      )}
      <SwipeableBottomSheet overflowHeight={0} open={is_bottom_sheet_open}>
        <BottomSheetBody>
          <BottomSheetHeader>
            <span
              class="material-icons"
              onClick={() => setBottomSheetOpen(false)}
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
    </Header>
  );
}

export default AppHeader;
