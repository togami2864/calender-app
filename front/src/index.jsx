import React from "react";
import ReactDOM from "react-dom";

import CalendarBoard from "./components/CalendarBoard/index";

const App = () => (
    <div>
        <CalendarBoard />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"));
