import React from "react";
import RootComponent from "./pages/root.page";
import { MyProvider } from "./contexts/my-context";

function App() {
  return (
    <MyProvider>
      <RootComponent />
    </MyProvider>
  );
}

export default App;
