import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "material-ui/styles";
import MainNavigation from "./MainNavigation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MuiThemeProvider>
      <MainNavigation />
    </MuiThemeProvider>,
    div
  );
});
