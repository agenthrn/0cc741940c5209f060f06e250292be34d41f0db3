import SelectDay from "./Components/Select-day-component";
import SelectDelivery from "./Components/Select-delivery-loc-component";
import Tab from "./Components/Tab-component";
import styled from "styled-components";

import AppState from "./context/AppState";

const AppBody = styled.section`
  padding: 0 16px 0 16px;
`;

function App() {
  return (
    <AppState>
      <AppBody>
        <SelectDelivery />
        <SelectDay />
        <Tab />
      </AppBody>
    </AppState>
  );
}

export default App;
