import type { Profile } from "../profiles"; // Импорт интерфейса и данных
// Импорт интерфейса и данных
import styles from "./ProfileCard.module.css"; // Импорт стилей

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={profile.avatarUrl}
        alt={`${profile.firstName} ${profile.lastName}`}
      />
      <h2 className={styles.name}>
        {`${profile.firstName} ${profile.lastName}`}
      </h2>
      <p className={styles.occupation}>{profile.occupation}</p>
      <h3 className={styles.hobby}>
        Hobbies: <span className={styles.hobbyValue}>{profile.hobby}</span>
      </h3>
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
  href="https://github.com/dmitrined/FrontEndReact/tree/main/vite-project/src/components/HW/HW2"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}
