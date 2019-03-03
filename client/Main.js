import React from 'react';
import Load from './Load';
import Questions from './Questions';
import TwitterWidget from './TwitterWidget';
import Welcome from './Welcome';

var styles = {
  width: '400px',
};

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        {/* <div className="header"> */}
        {/* <img
          src="/jetblue-logo-simple.png"
          id="logo"
          className="img-fluid"
          style={styles}
        /> */}
        {/* <img
          src="/Jet-Blue-logo.png"
          id="logo"
          className="img-fluid"
          style={styles}
        /> */}
        {/* </div> */}
        {/* <Welcome /> */}
        <Load
          endpoint="questions"
          render={({ questions }) => <Questions questions={questions} />}
        />
        {/* <TwitterWidget /> */}
      </div>
    );
  }
}

export default Main;
