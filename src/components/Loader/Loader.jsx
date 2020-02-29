import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loaderin from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Loaderin
        type="Puff"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={4000}
      />
    </div>
  );
};

export default Loader;

