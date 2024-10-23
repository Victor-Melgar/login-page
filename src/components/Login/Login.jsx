import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react";
import './index.css';
import './App.css'



const Login = () => {
        
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();

            alert("Eviando os dados:" + username + " - " + password);
        }

  return (

    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1 className="bg-blue-600">Acesse o Sistema</h1>
            <div>
                <input 
                type="email" 
                placeholder="E-mail"
                required
                onChange={(e) => setUsername(e.target.value)}  />
                <FaUser className="icon" />
            </div>
            <div>
                <input 
                type="password" 
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}  />
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label htmlFor="">
                    <input 
                    type="checkbox" />
                    Lembre-me
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login