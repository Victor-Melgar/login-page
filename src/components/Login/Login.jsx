import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react";
import "./index.css";
import "../../App.css";



const Login = () => {
        
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();

            alert("Eviando os dados:" + username + " - " + password);
        }

  return (

    <div id="container" className="flex justify-center items-center min-h-screen bg-gray-700 w-full h-full">
        <form onSubmit={handleSubmit}>
            <div className="border border-black rounded w-[360px] h-[360px] bg-transparent ml-[700px]">
                <div className="mt-14">
            <h1 className="pb-5 text-xl text-white uppercase font-bold">Acesse o Sistema</h1>
            <div className="">
                <input
                className="rounded p-1.5 w-[90%] bg-transparent"
                type="email" 
                placeholder="E-mail" 
                required
                onChange={(e) => setUsername(e.target.value)}  />
                <FaUser className="absolute left-[1160px] top-[290px] text-white" />
            </div>
            <div className="">
                <input
                className="rounded p-1.5 mt-5 w-[90%] bg-transparent" 
                type="password" 
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}  />
                <FaLock className="absolute left-[1160px] top-[345px] text-white" />
            </div>
            <button className="bg-blue-500 rounded pl-12 pr-12 mt-5 w-[90%] h-[30px] font-bold text-white">
                Entrar
            </button>

            <div id="recall-forget" className="text-white mt-3">
                <label htmlFor="">
                    <input
                    className="mr-[5px]"
                    type="checkbox" />
                    Lembre-me
                    <a href="#" className="pl-20">Esqueci a senha</a>
                </label>
            </div>

            <div className="flex justify-center text-white mt-5">
                <p className="pr-2">Crie sua conta</p>
                <a href="#" className="text-sky-500">Cadastro</a>
            </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login