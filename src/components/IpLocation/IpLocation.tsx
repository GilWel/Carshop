import { useEffect, useState } from "react";
import styles from "./IpLocation.module.css";

interface MyLocation {
  query: string;
  country: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  isp: string;
}

export default function IpLocation() {
  const [locatData, setLocatData] = useState<MyLocation | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string| null>(null);

  async function getlocation(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch("http://ip-api.com/json");
        const data: MyLocation= await response.json();
        setLocatData(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    getlocation();
  }, []);

    return (
        <div className={styles.container}>
         
          <img src="https://steamuserimages-a.akamaihd.net/ugc/786374678940113386/82A524D10FE4625FDFB62FEC42BF993F3904DCF1/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" className={styles.hack} alt="" />
          {error && <p className={styles.error}>{error}</p>}
          {/* условный рендеринг с помощью оператора логического "И" (&&),
           чтобы отображать элементы в зависимости от наличия данных в переменных error и location. */}
            <button onClick={getlocation} disabled={loading} className={styles.button}>
            {loading ? "Загрузка..." : "Обновить локацию"}
            {/* Если loading === true → Отображается "Загрузка..." (значит, запрос выполняется).
            Если loading === false → Отображается "Обновить локацию" (значит, данные загружены, и можно запросить снова). */}
          </button>
          {locatData && (
            <div className={styles.card}>
              <p><strong>IP:</strong> {locatData.query}</p>
              <p><strong>Страна:</strong> {locatData.country}</p>
              <p><strong>Регион:</strong> {locatData.regionName}</p>
              <p><strong>Город:</strong> {locatData.city}</p>
              <p><strong>Широта:</strong> {locatData.lat}</p>
              <p><strong>Долгота:</strong> {locatData.lon}</p>
              <p><strong>Провайдер:</strong> {locatData.isp}</p>
            </div>
          )}
        </div>
      );
    }

