import React, { useState, useContext } from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import AppContext from "../context/AppContext";

const MenuCard = styled.section`
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  max-width: 500px;
  height:250px:
`;

const MenuCardBody = styled.section`
  padding: 8px;
`;

const MenuTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #424749;
`;

const MenuPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #424749;
`;

const MenuMeta = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #424749;
`;

const AddButton = styled.button`
  border-radius: 4px;
  border: 0;
  background: #f9423a;
  color: white;
  padding: 0px;
  line-height: 40px;
`;

// const MenuImage = styled.img`
//   width: 100%;
//   height: 200px;
// `;

const MenuCardFooter = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  margin: 8px 0 8px 0;
  align-items: center;
`;

function CardMenu({ pictureUrl, rating, title, author, city, price }) {
  const { date } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState(true);

  return (
    <MenuCard>
      <img
        style={{ width: "100%", height: 250 }}
        alt={`Gambar dari ${title}`}
        src={pictureUrl}
      />
      <MenuCardBody>
        <ReactStars
          count={5}
          value={rating}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#f9423a"
        />
        <MenuTitle>{title}</MenuTitle>
        <MenuMeta>{`by ${author} - ${city}`}</MenuMeta>
        <MenuCardFooter>
          <MenuPrice>Rp {price}</MenuPrice>
          <AddButton>
            ADD <span class="material-icons">add</span>
          </AddButton>
        </MenuCardFooter>
      </MenuCardBody>
    </MenuCard>
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

export default CardMenu;
