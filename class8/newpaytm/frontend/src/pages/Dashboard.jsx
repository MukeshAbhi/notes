import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import axios from 'axios';
import { set } from 'mongoose';

const Dashboard= ()=>{
    const [balance,setBalance] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            setBalance(response.data.balance);
        })
    })
    return(
        <>
            <div className='mx-4'>
                <AppBar />
                <Balance value={balance}/>
                <Users />
            </div>
        </>
    )
}

export default Dashboard;