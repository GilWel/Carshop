interface Propse{
    gears: number,
    brand:string,
    price:number,
    color:string
}

export default function Bike(props:Propse):JSX.Element{
    const {gears, brand, price,color}=props
    return(
        <div
            style = {{backgroundColor:color, color:"white"}}>
                Gears:{gears} Brand: {brand} Price {price} Color:{color}
        </div>
    );
}