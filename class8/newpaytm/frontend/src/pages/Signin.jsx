import Heading from '../components/Heading'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    return(
        <>
            <div className="h-screen bg-slate-300 flex justify-center">
                <div className='flex flex-col justify-center'>
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label={"Sign In"} />
                        <SubHeading label={"Enter your credentials to access your account"} />
                        <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} 
                            onchange={e =>{
                                setUsername(e.target.value)
                            }} />
                        <InputBox label={"Password"} placeholder={""} 
                            onchange={e => {
                                setPassword(e.target.value)
                            }} />
                        <div className='mt-3'>
                            <Button label={"Sign In"} onClick={async()=>{
                                const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                                    username,
                                    password
                                })
                                localStorage.setItem("token",response.data.token);
                                localStorage.setItem("username",username);
                                if(response){
                                    navigate("/dashboard")
                                }
                            }} />
                        </div>
                        <BottomWarning label={"Don't have an account ?"} to={"/signup"} buttonText={"Sign up"}/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;