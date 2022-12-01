// Pagina estatica

import axios from "axios";
import { useEffect, useState } from "react";

const PlayersListPage_ST = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/players").then((res) => {
      setPlayers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Jogadores disponíveis</h1>
      <ul>
        {players.map((player, key) => (
          <li key={key}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersListPage_ST;
