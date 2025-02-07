import { useEffect, useState } from "react";
import style from "./UserPage.module.css";

interface User {
    id : number;
    email: string;
    username:string;
    password: string;
    name: {
        firstname:string;
        lastname:string;
    },
    address: Address;
    phone: string;
}

interface Address{
      city: string,
      street: string,
      number: number,
      zipcode: string,
      geolocation: {
        let: string,
        long: string
      }
}

export default function UserPage():JSX.Element {
const [users, Setusers] = useState<User[]>([]);

async function loadUsers(): Promise<void> {
    const res= await fetch ("https://fakestoreapi.com/users");
    const arr = await res.json();
    Setusers(arr)
   }  
useEffect(() =>{
    loadUsers()
},[])
   
  return (
    <div>
<ul>
    {users.map((user)=> 

       (<li className={style.li_item} key={user.id}>

<div>    nick:{user.username};</div>

<div> name: {user.name.firstname} {user.name.lastname};</div>

<div> phone: {user.phone};</div>

<div> email: {user.email};</div>

<div> Zip-code:{user.address.zipcode}</div>

<div>Aderess: {user.address.city} {user.address.street} {user.address.number}</div>

<div> geolocation: {user.address.geolocation.let} {user.address.geolocation.let}</div>


       </li> 
    ))}
            
</ul>
   </div>

    )}


