import React from "react";
import Load from "./Load";
import Questions from "./Questions";
import TwitterWidget from "./TwitterWidget";

var styles = {
  width: "400px"
};

class Main extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="container-fluid">
          <h2>Jetblue Quiz!</h2>
          <div id="logo-backdrop">
            <img
              src="/jetblue-logo-simple.png"
              id="logo"
              className="img-fluid"
              style={styles}
            />
          </div>
          {/* <img
          src="/Jet-Blue-logo.png"
          id="logo"
          className="img-fluid"
          style={styles}
        /> */}
        </div>
        <Load
          endpoint="questions"
          render={({ questions }) => <Questions questions={questions} />}
        />
      </div>
    );
  }
}

export default Main;
