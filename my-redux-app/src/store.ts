import { combineReducers, createStore } from "redux";
import counterReducer from "./components/Lecture/L8/counter/counterReducer";
import sandwichReducer from "./components/HW/HW8/sandwichRedux/sandwichReducer";
import tasksReducer from "./components/HW/HW9/tasks/TasksReduser";

const store = createStore(combineReducers(
    {
        counter: counterReducer, 
        sandwich: sandwichReducer ,
        tasks: tasksReducer
    }
));

export default store;
export type RootState = ReturnType<typeof store.getState>;