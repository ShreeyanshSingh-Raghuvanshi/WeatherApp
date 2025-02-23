import React from "react";
import WeatherApp from "./components/WeatherApp";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";




function App() {
  return (
    <div>
      <WeatherApp />
      <mantine />
    </div>
  );
}

export default App;
