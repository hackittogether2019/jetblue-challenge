import React, { Component } from 'react';

class TwitterWidget extends Component {
  render() {
    return (
      <div className="twitter-widget text-light">
        <h4>Stay connected with us on Twitter</h4>
        <a
          href="https://twitter.com/jetblue?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @jetblue
        </a>
        <div style={{ height: '25px' }} />
        <a
          className="twitter-timeline"
          data-width="400"
          data-height="400"
          href="https://twitter.com/JetBlue?ref_src=twsrc%5Etfw"
        >
          Tweets by JetBlue
        </a>
      </div>
    );
  }
}

export default TwitterWidget;
