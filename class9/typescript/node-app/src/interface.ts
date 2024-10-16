import { number, string } from "zod";

interface User  {
    firstName: string,
    lastName: string,
    age: number
}

function isLeagle( user : User){
    return user.age > 18 ? true : false ;
}

const oop = {
    firstName : "abhi",
    lastName : "gobi",
    age: 39
}

const ap = isLeagle(oop)

console.log(ap)