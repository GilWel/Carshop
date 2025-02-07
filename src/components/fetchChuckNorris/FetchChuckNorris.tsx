import { useEffect, useState } from "react";
import styles from "./FetchChuckNorris.module.css";
import MyButton from "../MyButton/MyButton";

interface JokesOfChuck {

  value: string;
  icon_url: string;
}

export default function FetchChuckNorris(): JSX.Element {
  const [jokes, setJokes] = useState<string>("");

  async function getJokes(): Promise<void> {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data: JokesOfChuck = await res.json();
    setJokes(data.value);
  }
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <ul>
        <li className={styles.jokesOfChuck}>
          <div className={styles.value}> 🤣😎{jokes}🔥😂 </div>
          <img className={styles.image} src='https://www.film.ru/sites/default/files/people/1460175-855685.jpg' alt="img" />
          <MyButton func={getJokes} text="one more joke please" />
        </li>
      </ul>
    </div>
  );
}
