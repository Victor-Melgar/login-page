// import { useState } from "react";
import './index.css';

<link href="./output.css" rel="stylesheet"></link>

const login = () => {

  return (

    // const [username, setUsername] = useState("");
    //     const [password, setPassword] = useState("");

    //     const handleSubmit = (event) => {
    //         event.preventDefault();

    //         alert("Eviando os dados:" + username + " - " + password);
    //     }

    <> 
    <div id="container" className="flex justify-center items-center min-h-screen bg-gray-700 w-full h-full">
        <form>
            <div className="border border-black rounded w-[360px] h-[360px] bg-transparent ml-[700px]">
                <div className="mt-14">
            <h1 className="pb-5 text-xl text-black uppercase font-bold">Acesse o Sistema</h1>
            <div className="">
                <input
                className="rounded p-1.5 w-[90%] bg-transparent"
                type="email" 
                placeholder="E-mail" 
                required />
            </div>
            <div className="">
                <input
                className="rounded p-1.5 mt-5 w-[90%] bg-transparent" 
                type="password" 
                placeholder="Senha"
                required />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 rounded pl-12 pr-12 mt-5 w-[90%] h-[30px] font-bold text-white">
                Entrar
            </button>

            <div id="recall-forget" className="text-black mt-3">
                <label htmlFor="">
                    <input
                    className="mr-[5px]"
                    type="checkbox" />
                    Lembre-me
                    <a href="#" className="pl-20 text-black">Esqueci a senha</a>
                </label>
            </div>

            <div className="flex justify-center text-black mt-5">
                <p className="pr-2">Crie sua conta</p>
                <a href="#" className="text-sky-500">Cadastro</a>
            </div>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default login