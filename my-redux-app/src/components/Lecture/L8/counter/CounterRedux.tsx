import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import styles from "./CounterRedux.module.css";

export default function CounterRedux(): JSX.Element {
    const dispatch = useDispatch();
    function handlePlus(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
       dispatch ({ type: 'counter/plus', payload: 1 })
    }
     function handleMinus(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
       dispatch ({ type: 'counter/minus', payload: 1 })
    }
     function handleReset(): void {
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
       dispatch ({ type: 'counter/reset' })
    }
    const counter = useSelector((state: RootState) => state.counter.value);
    // useSelector - функция для получения значения централизованного состояния
    return(
        <div className={styles.centerContainer}>
            {/* 2. Применяем класс 'counterControls' к внутреннему div */}
            <div className={styles.counterControls}>
                <button type="button" onClick={handlePlus}>+</button>
                
                {/* 3. Применяем класс 'counterDisplay' к счетчику */}
                <span className={styles.counterDisplay}>{counter}</span>
                
                <button type="button" onClick={handleMinus}>-</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </div>

    )
}