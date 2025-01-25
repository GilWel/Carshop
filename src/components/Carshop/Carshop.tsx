import Bike from "../bike/Bike";
import Car from "../Car/Car";
import AutoShopPhoto from "../Carshop/img/depositphotos_207903064-stock-photo-row-new-pickup-trucks-sale.jpg"

export default function Carshop ():JSX.Element{
    return (
        <div>
            <h1>Car shop</h1>
            <h2>Cars</h2>
            <Car brand="Mercedec" color="green" />
            <Car brand="Tesla" color="blue" />
            <Car brand="Opel" color="yellow" />
            <Car brand="Lada" color="red" />
            <Car brand="Audi" color="black" />
            <Bike gears= {15} brand="Yawa" price={5000} color="green" />
            <Bike gears= {25} brand="Honda" price={15000} color="blue"/>
            <Bike gears= {35} brand="BMW" price={25000} color="red"/>
            <h1>Первый способ подгрузить изображение через импорт</h1>
            <img src ={AutoShopPhoto} width="800" alt="" />
            <h1>Второй способ подгрузить изображение через импорт</h1>
            <img src= "BMWShop.webp" width="800"alt="" />

        </div>
    )
}