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

    <div id="container" className="flex justify-center items-center min-h-screen bg-gray-700 w-full border">
        <form onSubmit={handleSubmit}>
            <div className="border border-black rounded w-[360px] h-[360px] bg-zinc-900">
                <div className="mt-20">
            <h1 className="pb-5 text-xl">Acesse o Sistema</h1>
            <div className="">
                <input
                className="rounded"
                type="email" 
                placeholder="E-mail"
                required
                onChange={(e) => setUsername(e.target.value)}  />
                <FaUser className="icon" />
            </div>
            <div className="">
                <input
                className="rounded bg-" 
                type="password" 
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}  />
                <FaLock className="icon" />
            </div>

            <div id="recall-forget" className="">
                <label htmlFor="">
                    <input 
                    type="checkbox" />
                    Lembre-me
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login