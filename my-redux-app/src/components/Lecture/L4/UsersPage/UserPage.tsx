import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type User from "./types/User";

export default function UserPage(): JSX.Element {
  const { userId } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);

  

  return (
    <>
      {user && (
        <div style={{ border: "solid black 2px", margin: "10px" }} key={user.id}>
          <div>Ник:{user.username}</div>
          <div>
            Имя,фамилия:{user.name.firstname} {user.name.lastname}
          </div>
          <div>Телефон:{user.phone}</div>
          <div>Емайл:{user.email}</div>
          <div>Zip-code: {user.address.zipcode}</div>
          <Link to="../userspage">К списку пользователей</Link>

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
  href="https://github.com/dmitrined/FrontEndReact/blob/main/vite-project/src/components/Lecture/L4/UsersPage/UsersPage.tsx"
>
  Посмотреть код этой страницы на GitHub
</a>
        </div>
      )}
    </>
  );
}
