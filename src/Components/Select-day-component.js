import React from "react";
import styled from "styled-components";

const DayName = styled.span`
  display: block;
  color: "#6e7679";
  font-size: 10px;
`;

const DayInt = styled.span`
  display: block;
  font-size: 18px;
  color: "#424749";
  font-weight: 600;
`;

const DayItem = styled.span`
  padding: 5px 20px 10px 20px;
`;

const SelectDaySection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

function SelectDay() {
  return (
      <SelectDaySection>
        {GetDates(new Date(), 14).map((date) =>
          date.dayName != "SAB" || date.dayName != "MIN" ? (
            <DayItem>
              <DayName>{date.dayName}</DayName>
              <DayInt>{date.dayInt}</DayInt>
            </DayItem>
          ) : (
            <DayItem>
              {/* <DayName>{date.dayName}</DayName> */}
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
