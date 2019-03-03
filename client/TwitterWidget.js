import React, { Component } from 'react';

class TwitterWidget extends Component {
  render() {
    return (
      <div className="twitter-widget">
        <h4>Stay connected with us on Twitter</h4>
        <a
          href="https://twitter.com/jetblue?ref_src=twsrc%5Etfw"
          className="twitter-follow-button twitter-follow"
          data-show-count="false"
        >
          Follow @jetblue
        </a>
        <div />
        <a
          className="twitter-timeline twitter-tl"
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
