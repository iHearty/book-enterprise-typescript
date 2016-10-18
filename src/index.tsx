import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppHeader } from "./header/app-header";
import { App } from "./app";

ReactDOM.render(
   <App navigators="[]" />,
   document.getElementById("mainApp")
);