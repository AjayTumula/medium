
import {Link, useNavigate} from "react-router-dom"
import { InputBox } from "../ui-kit/Input"
import { useState } from "react"
import { SignupInput } from  "@ajaytumulaa/common-app"
import { BACKEND_URL } from "../config"
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        name: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            console.log(jwt)
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch(e) {
            alert("Error while signup")
        }
        
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    {type === "signin" ? "Don't have an account?" :  "Already have an account?" }
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "Sign up" : "Sign in"}</Link>
                </div>
                <InputBox type="" placeholder="johndoe@gmail.com" label="Username" onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        username: e.target.value
                    }))
                }}/>
                <InputBox type="password" placeholder="" label="Password" onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        password: e.target.value
                    }))
                }}/>

                {type === "signup" ? <InputBox placeholder="John Doe" label="Name" onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        name: e.target.value
                    }))
                }}/> : ""}

                <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                    focus:ring--gray-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5  me-2 mb-2">
                    {type === "signup" ? "Sign up" : "Sign in"}
                </button>
            </div>
        </div>
    </div>
}