//Создать компонент Coctail.tsx и отрисовать как минимум два ключа :
//- Название коктейля
//Фото напитка
//https://www.thecocktaildb.com/api/json/v1/1/random.php

import { useEffect, useState } from "react"

//ИСпользовать useEffect   только для первой отрисовки


export default function Coctail():JSX.Element {
    

    const [cocktail, setCocktail] = useState<{ name: string; imageUrl: string }>({ name: '', imageUrl: '' });

    useEffect(() => {
      // Функция для получения случайного коктейля
      const fetchCocktail = async () => {
        try {
          const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          const data = await response.json();
          const cocktailData = data.drinks[0];
          setCocktail({
            name: cocktailData.strDrink,
            imageUrl: cocktailData.strDrinkThumb,
          });
        } catch (error) {
          console.error('Ошибка при загрузке коктейля:', error);
        }
      };
  
      // Вызов функции при монтировании компонента
      fetchCocktail();
    }, []); // Пустой массив зависимостей - выполняется только один раз при монтировании
  
    return (
      <div>
        <h2>{cocktail.name}</h2>
        <img src={cocktail.imageUrl} alt='' style={{ width: '200px', height: 'auto', borderRadius:50 }} />
      </div>
    );
  };