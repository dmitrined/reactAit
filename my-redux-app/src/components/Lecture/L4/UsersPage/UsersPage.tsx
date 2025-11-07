import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";
import { Link } from "react-router-dom";

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUser(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }     

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <ul>      
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            <div>Ник:{user.username}</div>
            <div>
              Имя,фамилия:{user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон:{user.phone}</div>
            <div>Емайл:{user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
            <Link to = {String(user.id)}>К Пользователю</Link>
          </li>
        ))}
      </ul>
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
  href="https://github.com/dmitrined/FrontEndReact/blob/main/vite-project/src/components/Lecture/L3/Counter/Counter.tsx"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}
// 