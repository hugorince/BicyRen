import { useState } from "react";
import ClassicButton from "./ClassicButton";

const LoginForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>
        <div className="flex flex-col w-48 space-y-2 items-center">
            <div>
                <h2>Enter your email:</h2>
                <input type="mail" placeholder="enter your email" className="border border-black" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <h2>Enter your password:</h2>
                <input type="password" placeholder="enter your password" className="border border-black" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="">
                <ClassicButton label={'log in'} action={()=>{console.log('email : ', email, ' password : ', password)}}/>
            </div>
        </div>
        </>
    )
}

export default LoginForm;