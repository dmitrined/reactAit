import type { JSX } from "react";
import { useState } from "react";
import style from "./LayoutApp.module.css";
import { Link, NavLink } from "react-router-dom";
import type { ThemeType } from "./ThemeContext";
import logoAit from "./img/AitLogo.png";
import myFoto from "./img/myFoto.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar } from "@mui/material";

// ✅ Определение интерфейса для пропсов
export interface NavProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

// ✅ Компонент принимает пропсы
export default function NavBarApp({
  theme,
  toggleTheme,
}: NavProps): JSX.Element {
  // ✅ Состояние для открытия/закрытия бургер-меню
  const [isOpen, setIsOpen] = useState(false);

  // Состояния для логики аккордеона
  const [isLectureVisible, setIsLectureVisible] = useState(false);
  const [isHomeworkVisible, setIsHomeworkVisible] = useState(false);
  const [isConsultationVisible, setIsConsultationVisible] = useState(false);

  // ✅ НОВАЯ ФУНКЦИЯ: Закрытие бургер-меню и всех аккордеонов при клике на ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsLectureVisible(false);
    setIsHomeworkVisible(false);
    setIsConsultationVisible(false);
  };

  // Функции-переключатели аккордеона
  const toggleLectureVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLectureVisible(!isLectureVisible);
    setIsHomeworkVisible(false);
    setIsConsultationVisible(false);
  };

  const toggleHomeworkVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsHomeworkVisible(!isHomeworkVisible);
    setIsLectureVisible(false);
    setIsConsultationVisible(false);
  };

  const toggleConsultationVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConsultationVisible(!isConsultationVisible);
    setIsLectureVisible(false);
    setIsHomeworkVisible(false);
  };

  return (
    <nav className={`${style.navigation}`} data-theme={theme}>
      <a target="_blank" href="https://edu.ait-tr.de/">
        <img src={logoAit} alt="logoAit" className={style.logo} />
      </a>
     
      <div className={style.githubContainer}>
        <a
          target="_blank"
          href="https://github.com/dmitrined/reactAit"
          className={`${style.githubLink} ${style.link}`}
        >
          <GitHubIcon />
        </a>
      </div>
      <NavLink to="home" className={style.link}>
        <Avatar alt="myFoto" src={myFoto} />
      </NavLink>

      <div className={`${style.navItems} ${isOpen ? style.open : ""}`}>
        {/* БЛОК 1: LECTURE */}
        <div className={style.dropdownContainer}>
          <Link
            to="lecture"
            onClick={toggleLectureVisibility}
            className={style.lectureToggle}
            role="button"
            tabIndex={0}
          >
            Lecture{" "}
            {isLectureVisible ? <FileUploadIcon /> : <FileDownloadIcon />}
          </Link>

          {isLectureVisible && (
            <ul className={style.list} key={"lecture"}>
              <li className={style.listElement}>
                <NavLink
                  to="alcohol"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Alcohol
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="carshop"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CarShop
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="counter"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Counter
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="sandwich"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Sandwich
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="userspage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Users Page
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="playgrount"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Playgrount
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="dogsImage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  DogsImage
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="contactForm"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  ContactForm
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="counterRedux"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CounterRedux
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* БЛОК 2: HOMEWORK */}
        <div className={style.dropdownContainer}>
          <Link
            to="homework"
            onClick={toggleHomeworkVisibility}
            className={style.lectureToggle}
            role="button"
            tabIndex={0}
          >
            HomeWork{" "}
            {isHomeworkVisible ? <FileUploadIcon /> : <FileDownloadIcon />}
          </Link>

          {isHomeworkVisible && (
            <ul className={style.list} key={"homework"}>
              <li className={style.listElement}>
                <NavLink
                  to="homework02"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Profile Card
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="feedback"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Feedback
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="anecdotes"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Anecdotes
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="products"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Products
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="cardSecurityCheck"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CardSecurityCheck
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="toDoList"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  ToDoList
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="sandwichRedux"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  SandwichRedux
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="toDoRedux"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  ToDoRedux
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* БЛОК 3: CONSULTATION */}
        <div className={style.dropdownContainer}>
          <Link
            to="consultation"
            onClick={toggleConsultationVisibility}
            className={style.lectureToggle}
            role="button"
            tabIndex={0}
          >
            Consultation{" "}
            {isConsultationVisible ? <FileUploadIcon /> : <FileDownloadIcon />}
          </Link>

          {isConsultationVisible && (
            <ul className={style.list} key={"consultation"}>
              <li className={style.listElement}>
                <NavLink
                  to="citiPage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CitiPage
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="inputMiror"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  InputMiror
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="header"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Burger
                </NavLink>
              </li>

              <li className={style.listElement}>
                <NavLink
                  to="dishes"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Dishes
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* ✅ КНОПКА-ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ */}
      <button onClick={toggleTheme} className={style.themeToggle}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>

      {/* ✅ БУРГЕР-ИКОНКА: Переключает состояние 'isOpen' */}
      <p className={style.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </p>
    </nav>
  );
}
