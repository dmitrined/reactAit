import { useState, type JSX } from "react";

export function InputMirror(): JSX.Element {
  const [text, setText] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    fontFamily: "sans-serif",
  };

  return (
    <div style={containerStyle}>
      <label>
        Введите текст:{" "}
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Начните вводить..."
        />
      </label>
      <p>Вы ввели: {text || "ничего"}</p>

      {/* Кнопка для GitHub кода */}
      <a
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    textDecoration: 'none', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#24292e', 
    border: '2px solid #24292e',
    borderRadius: '6px',
    marginTop: '15px' 
  }}
  target="_blank"
  href="https://github.com/dmitrined/FrontEndReact/blob/main/vite-project/src/components/Consultation/Practice2/InputMirror/InputMirror.tsx"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}
// 🧠 Пояснение по типам:

// useState<string>("") — состояние хранит строку.

// handleChange принимает строго типизированное событие React.ChangeEvent<HTMLInputElement>.

// containerStyle типизирован через React.CSSProperties.

// Возвращаемое значение компонента — JSX.Element.