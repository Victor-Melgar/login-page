import './index.css';

const cadastro = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex justify-center items-center">
      <form>
        <div className="border rounded ">
        <div className="pl-5">
          <h1 className="text-white text-3xl font-bold uppercase pb-5">Crie a sua conta</h1>
        </div>
            
        <div>
          <label className="text-white">Nome completo</label>
          <input 
          type="text"
          id="nome"
          className="rounded p-1.5 w-[90%] bg-"
          placeholder="Nome completo"
          />
        </div>

        <div className="">
          <label className="">E-mail</label>
          <input 
          type="email"
          id="nome-mae"
          className="rounded p-1.5 w-[90%] bg-transparent"
          placeholder="E-mail"
          />
        </div>

        <div>
          <label>Senha</label>
          <input 
          type="password"
          id="senha"
          className="rounded p-1.5 w-[90%] bg-transparent"
          placeholder="Senha"
          />
        </div>

        <div>
          <label>Confirme a Senha</label>
          <input 
          type="password"
          id="senha"
          className="rounded p-1.5 w-[90%] bg-transparent"
          placeholder="Confirme a senha"
          />
        </div>

        <div id="recall-forget" className="text-black mt-3">
                <label htmlFor="">
                    <input
                    className="mr-[5px]"
                    type="checkbox" />
                    Lembre-me
                </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded pl-12 pr-12 mt-5 w-[50%] h-[30px] font-bold text-white">
                Criar
        </button>
        </div>
      </form>
    </div>
  )
}

export default cadastro