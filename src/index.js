import "./index.scss"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(registration => {
      console.log("SW Registered!");
      console.log(registration);
  }).catch(error => {
      console.log("SW Registration Has Failed...");
      console.log(error);
  });
}

if (window.console) {
      var o = navigator.userAgent.toLowerCase();
      if (o.indexOf("chrome") > -1 || o.indexOf("firefox") > -1) {
          window.console.log.apply(console, ["%c %c Site Built By Jack Jona %c %c  https://jackjona.com  %c ", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;"])
      } else
          window.console.log("Site Built By Jack Jona - https://jackjona.com")
}