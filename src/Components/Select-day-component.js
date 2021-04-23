import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const DayName = styled.span`
  display: block;
  color: #6e7679;
  font-size: 8px;
  text-align: center;
  ${(props) =>
    props.inactive &&
    ` color: #f1f1f2;
    `}
  ${(props) =>
    props.selected &&
    ` color: white;
        `}
`;

const DayInt = styled.span`
  display: block;
  font-size: 16px;
  color: #424749;
  font-weight: 600;
  text-align: center;
  ${(props) =>
    props.inactive &&
    ` color: #f1f1f2;
    `}
  ${(props) =>
    props.selected &&
    ` color: white;
      `}
`;

const DayItem = styled.section`
  margin: 8px;
  padding: 8px 16px 8px 16px;
  width: 32px;
  height: 32px;
  ${(props) =>
    props.active &&
    `background: #424749;
    border-radius: 50%;
    `}
`;

const SelectDaySection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: center;
  margin: 8px 0 8px 0;
`;

function SelectDay() {
  const { setAppDate, date } = useContext(AppContext);

  return (
    <SelectDaySection>
      {date &&
        GetDates(new Date(), 14).map((date_data) =>
          date_data.dayName == "SAB" || date_data.dayName == "MIN" ? (
            <DayItem>
              <DayName inactive>{date_data.dayName}</DayName>
              <DayInt inactive>{date_data.dayInt}</DayInt>
            </DayItem>
          ) : date_data.originalDate.toString() == date.toString() ? (
            <DayItem active>
              <DayName selected>{date_data.dayName}</DayName>
              <DayInt selected>{date_data.dayInt}</DayInt>
            </DayItem>
          ) : (
            <DayItem onClick={() => setAppDate(date_data.originalDate)}>
              <DayName>{date_data.dayName}</DayName>
              <DayInt>{date_data.dayInt}</DayInt>
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
