import axios from "axios";

export const NewPlayerPage = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    await axios.post('http://localhost:3000/api/new_player', { name }); // chamada para API (internamente)
    console.log("Cadastrou jogador");
  }

  return (
    <div>
      <h1>Cadastrar novo jogador</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome do jogador" />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default NewPlayerPage;
