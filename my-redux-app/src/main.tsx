import { createRoot } from "react-dom/client";
import {  BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/Lecture/L6/themeContext/ThemeProvider.tsx";
import AppApp from "./components/NavBarApp/AppApp.tsx";

import { Provider } from "react-redux";

//import store from "./store.ts"; 
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter basename="/reactAit" > 
        <AppApp />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);