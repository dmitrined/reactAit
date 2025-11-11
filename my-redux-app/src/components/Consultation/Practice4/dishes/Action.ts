import type Dish from "./types/Dish";
import type { DishId } from "./types/Dish";
import type DishDto from "./types/DishDto";

export type Action = 
|{ type: 'disches/create',payload:DishDto } // <Создание> все видные поля для создания интерфейса(без id)
|{ type: 'disches/delete',payload:DishId } // <Удаление>id для удаления 
|{ type: 'disches/edit',payload:Dish } // <Редактирование> все видные поля + id 

