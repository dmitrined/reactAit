// Импортируем хуки и типы из React, а также хук для работы с Redux
import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

// Определяем функциональный компонент TaskCreation, возвращающий JSX-элемент
export default function TaskCreation(): JSX.Element {

    // 1. Создаем состояние для заголовка задачи с помощью useState, инициализируем пустой строкой
    const [title, setTitle] = useState<string>('');
    // 2. Создаем состояние для описания задачи, также инициализируем пустой строкой
    const [description, setDescription] = useState<string>('');
    // 3. Получаем функцию dispatch из Redux для отправки (диспатча) экшенов
    const dispatch = useDispatch();

    // Функция-обработчик, вызываемая при отправке формы
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        // 4. Предотвращаем стандартное поведение браузера при отправке формы (перезагрузку страницы)
        event.preventDefault();
        
        // 5. Отправляем (диспатчим) экшен в Redux store для добавления новой задачи
        // Тип экшена: 'tasks/add'
        // Полезная нагрузка (payload): объект с текущими значениями title, description и флагом isDone: false
        dispatch({ type: 'tasks/add', payload: { title, description, isDone: false } })
        
        // 6. Очищаем поле заголовка, сбрасывая состояние title
        setTitle('');
        // 7. Очищаем поле описания, сбрасывая состояние description
        setDescription('');
    }

    // Возвращаем разметку (JSX) компонента
    return (
        <div>
            <h1>Форма создания задачи</h1>
            {/* 8. Форма, при отправке которой вызывается функция handleSubmit */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    // 9. Привязываем значение поля ввода к состоянию title
                    value={title}
                    // 10. Обновляем состояние title при каждом изменении поля ввода
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="text"
                    placeholder="description"
                    // 11. Привязываем значение поля ввода к состоянию description
                    value={description}
                    // 12. Обновляем состояние description при каждом изменении поля ввода
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* 13. Кнопка для отправки формы */}
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}