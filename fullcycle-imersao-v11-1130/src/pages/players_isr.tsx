// ISR: Incremental Static Regeneration

import axios from "axios";
import { Player } from "./model/Player";
import { GetStaticProps } from "next";

type PlayersListProps = {
  players: Player[];
}

const PlayersListPage_ISR = (props: PlayersListProps) => {
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

export default PlayersListPage_ISR;

export const getServerSideProps: GetStaticProps = async (context) => {
  console.log("Execucao do lado do servidor");

  const { data } = await axios.get("http://localhost:8080/players");
  console.log(data);
  return {
    props: {
      players: data,
    },
    revalidate: 30 // segundos para revalidar o backend
  };
};
