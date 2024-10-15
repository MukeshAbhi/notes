import Heading from '../components/Heading'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'


const Signin = ()=>{
    return(
        <>
            <div className="h-screen bg-slate-300 flex justify-center">
                <div className='flex flex-col justify-center'>
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label={"Sign In"} />
                        <SubHeading label={"Enter your credentials to access your account"} />
                        <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
                        <InputBox label={"Password"} placeholder={""} />
                        <div className='mt-3'>
                            <Button label={"Sign In"}/>
                        </div>
                        <BottomWarning label={"Don't have an account ?"} to={"/signup"} buttonText={"Sign up"}/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;