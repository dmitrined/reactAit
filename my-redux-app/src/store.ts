import { combineReducers, createStore } from "redux";
import counterReducer from "./components/counter/counterReducer"; 
import sandwichReducer from "./components/HW8/sandwichRedux/sandwichReducer"; 
import tasksReducer from "./components/L9/tasks/TasksReduser";

const store = createStore(combineReducers(
    {
        counter: counterReducer, 
        sandwich: sandwichReducer ,
        tasks: tasksReducer
    }
));

export default store;
export type RootState = ReturnType<typeof store.getState>;