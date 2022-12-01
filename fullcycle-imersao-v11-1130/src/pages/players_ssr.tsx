// SSR: Server-Side Rendering

import axios from "axios";
import { Player } from "./model/Player";
import { GetServerSideProps } from "next";

type PlayersListProps = {
  players: Player[];
}

const PlayersListPage_SSR = (props: PlayersListProps) => {
  const { players } = props;

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

export default PlayersListPage_SSR;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("Execucao do lado do servidor");

  const { data } = await axios.get("http://localhost:8080/players");
  console.log(data);
  return {
    props: {
      players: data,
    }
  };
};
