import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import CardMenu from "./Card-menu-component";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Cart from "./Cart-component";

const MenuSection = styled.section`
  display: grid;
  margin: 0 0 48px 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 8px;
`;

const CurrentDate = styled.p`
  font-weight: 800;
  color: #424749;
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Tab() {
  const {
    date,
    selected_location,
    selected_category,
    loading,
    getMenuData,
    menu,
    is_snackbar_open,
    setSnackbarOpen,
  } = useContext(AppContext);

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <>
      <CurrentDate>{FormatTimeDate(date)}</CurrentDate>
      <MenuSection>
        {!loading &&
          menu &&
          menu.menu.map(
            (menu) =>
              menu.category == selected_category && (
                <CardMenu
                  pictureUrl={menu.picture_url}
                  rating={menu.rating}
                  title={menu.title}
                  author={menu.author}
                  city={menu.city}
                  price={menu.price}
                />
              )
          )}
      </MenuSection>
      <Snackbar open={is_snackbar_open}>
        {selected_location == "Pilih alamat dahulu" ? (
          <Alert onClose={() => setSnackbarOpen(false)} severity="error">
            {selected_location}
          </Alert>
        ) : (
          <Cart />
        )}
      </Snackbar>
    </>
  );
}

function FormatTimeDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("id", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default Tab;
