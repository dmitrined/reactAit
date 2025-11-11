import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectDishes from "./selectors";
import type { DishId } from "./types/Dish";
import type Dish from "./types/Dish";
import style from "./DishesList.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import DishEditForm from "./DishEditForm";

export default function DishesList(): JSX.Element {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const handleDelete = (id: DishId): void => {
    dispatch({ type: "dishes/delete", payload: id });
  };

  return (
    <div>
      <ul className={style.list}>
        {(dishes as Dish[]).map((dish) => (
          <li className={style.dishCard} key={dish.id}>
            <h3 className={style.heading}>{dish.title}</h3>
            <p className={style.category}> {dish.category}</p>
            <img className={style.image} src={dish.image} alt={dish.title} />
            <p className={style.pice}>{dish.price} €</p>
            <div className={style.icons}>
              <ClearIcon onClick={() => handleDelete(dish.id)} />
              <DishEditForm dish={dish} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
