import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
    <SpeechProvider appId="4e80870f-a77b-44d8-a7ce-150fb7f164bf" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);