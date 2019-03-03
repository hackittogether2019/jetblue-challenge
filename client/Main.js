import React from "react";
import Load from "./Load";
import Questions from "./Questions";

var styles = {
  width: "400px"
};

const Main = () => (
  <div className="text-center">
    <div className="container-fluid">
      <img
        src="/Jet-Blue-logo.png"
        id="logo"
        className="img-fluid"
        style={styles}
      />
    </div>
    <Load
      endpoint="questions"
      render={({ questions }) => <Questions questions={questions} />}
    />
  </div>
);

export default Main;
