import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

import React from "react";

const Trailer = () => {
  let params = useParams();
  const key = params.ytTrailerId;
  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
        />
      ) : null}
    </div>
  );
};

export default Trailer;
