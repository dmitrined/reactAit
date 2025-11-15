import { createRoot } from "react-dom/client";
//import "./index.css";
import {  BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/Lecture/L6/themeContext/ThemeProvider.tsx";
import AppApp from "./components/NavBarApp/AppApp.tsx";

// 1. Импорт Redux Provider
import { Provider } from "react-redux";

// 2. Импорт вашего Redux Store с использованием алиаса @redux
// ⚠️ Убедитесь, что store.ts находится по этому пути: my-redux-app/src/store/store.ts
import store from "./store.ts"; 

createRoot(document.getElementById("root")!).render(
  // 3. Оборачиваем все приложение в Provider, передавая store. // basename="/reactAit"
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter basename="/reactAit" > 
        <AppApp />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);