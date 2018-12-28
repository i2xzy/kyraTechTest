import React, { Component } from 'react';
import styled from 'styled-components';

import VideoList from './VideoList';

import getVideos from '../api.js';

const Wrapper = styled.div`
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  height: 30vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: calc(8px + 1vmin);
`;

const Logo = styled.img`
  height: 20vmin;
`;

const Title = styled.h1`
  font-size: calc(8px + 2vmin);
  margin: 0;
`;

class App extends Component {
  state = {};

  componentDidMount() {
    this.interval = setInterval(
      () => getVideos().then(videos => this.setState({ videos })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { videos } = this.state.videos ? this.state : { videos: [] };
    return (
      <Wrapper>
        <Header>
          <Logo
            src="https://yt3.ggpht.com/a-/AAuE7mBqnPPY8TayObUP2JClC-yrPJ99SZgDxyZq4Q=s800-mo-c-c0xffffffff-rj-k-no"
            alt="logo"
          />
          <Title>PAQ: Fashion & Streetwear</Title>
        </Header>
        <VideoList videos={videos} />
      </Wrapper>
    );
  }
}

export default App;
