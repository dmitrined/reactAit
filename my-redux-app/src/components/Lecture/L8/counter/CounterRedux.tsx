import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import styles from "./CounterRedux.module.css";

export default function CounterRedux(): JSX.Element {
  const dispatch = useDispatch();
  function handlePlus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/plus", payload: 1 });
  }
  function handleMinus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/minus", payload: 1 });
  }
  function handleReset(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/reset" });
  }
  const counter = useSelector((state: RootState) => state.counter.value);
  // useSelector - функция для получения значения централизованного состояния
  return (
    <div className={styles.centerContainer}>
      {/* 2. Применяем класс 'counterControls' к внутреннему div */}
      <div className={styles.counterControls}>
        <button type="button" onClick={handlePlus}>
          +
        </button>

        {/* 3. Применяем класс 'counterDisplay' к счетчику */}
        <span className={styles.counterDisplay}>{counter}</span>

        <button type="button" onClick={handleMinus}>
          -
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {/* Кнопка для GitHub кода */}

      <a
        style={{
          display: "inline-block",
          padding: "10px 20px",
          textDecoration: "none",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          color: "white",
          backgroundColor: "#24292e",
          border: "2px solid #24292e",
          borderRadius: "6px",
          marginTop: "15px",
        }}
        target="_blank"
        href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/Lecture/L8/counter"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>
  );
}
