import type Dish from "./types/Dish";
import type { DishId } from "./types/Dish";
import type DishDto from "./types/DishDto";

export type Action = 
|{ type: 'dishes/create',payload:DishDto } // <Создание> все видные поля для создания интерфейса(без id)
|{ type: 'dishes/delete',payload:DishId } // <Удаление>id для удаления 
|{ type: 'dishes/edit',payload:Dish } // <Редактирование> все видные поля + id 

