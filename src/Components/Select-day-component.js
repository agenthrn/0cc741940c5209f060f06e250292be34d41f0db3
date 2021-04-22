import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const DayName = styled.span`
  display: block;
  color: #6e7679;
  font-size: 10px;
  text-align: center;
  ${(props) =>
    props.inactive &&
    ` color: #f1f1f2;
    `}
`;

const DayInt = styled.span`
  display: block;
  font-size: 18px;
  color: #424749;
  font-weight: 600;
  text-align: center;
  ${(props) =>
    props.inactive &&
    ` color: #f1f1f2;
    `}
`;

const DayItem = styled.span`
  padding: 5px 21px 5px 21px;
`;

const SelectDaySection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: center;
  margin: 10px 0 10px 0;
`;

function SelectDay() {
  const { setAppDate } = useContext(AppContext);

  return (
    <SelectDaySection>
      {GetDates(new Date(), 14).map((date) =>
        date.dayName == "SAB" || date.dayName == "MIN" ? (
          <DayItem>
            <DayName inactive>{date.dayName}</DayName>
            <DayInt inactive>{date.dayInt}</DayInt>
          </DayItem>
        ) : (
          <DayItem onClick={() => setAppDate(date.originalDate)}>
            <DayName>{date.dayName}</DayName>
            <DayInt>{date.dayInt}</DayInt>
          </DayItem>
        )
      )}
    </SelectDaySection>
  );
}

function GetDates(startDate, daysToAdd) {
  var aryDates = [];

  for (var i = 0; i <= daysToAdd; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);

    aryDates.push({
      originalDate: currentDate,
      dayName: DayAsString(currentDate.getDay()),
      dayInt: currentDate.getDate(),
    });
  }

  return aryDates;
}

function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "MIN";
  weekdays[1] = "SEN";
  weekdays[2] = "SEL";
  weekdays[3] = "RAB";
  weekdays[4] = "KAM";
  weekdays[5] = "JUM";
  weekdays[6] = "SAB";

  return weekdays[dayIndex];
}

export default SelectDay;
