import React, { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";


const TabSection = styled.section`
  margin: 10px 0 10px 0;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

const BodySection = styled.section`

`;

const TabSectionChild = styled.section`
  color: #424749;
  padding: 10px 0 10px 0;
  background: white;
  ${(props) =>
    props.active &&
    ` background: #424749;
      color: white;
    `}
`;

function Tab() {
  const { date } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <TabSection>
        {activeTab ? (
          <>
            <TabSectionChild active>Lunch</TabSectionChild>
            <TabSectionChild onClick={() => setActiveTab(false)}>
              Dinner
            </TabSectionChild>
          </>
        ) : (
          <>
            <TabSectionChild onClick={() => setActiveTab(true)}>
              Lunch
            </TabSectionChild>
            <TabSectionChild active>Dinner</TabSectionChild>
          </>
        )}
      </TabSection>
      <BodySection>
        <p>{FormatTimeDate(date)}</p>
      </BodySection>
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
