import React from "react";
import Player from "./Player";
import players from "./players";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {players.map((player, index) => ( //map
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
