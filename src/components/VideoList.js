import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 10px;
  list-style: none;
  width: 90%;
  padding: 0;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  :hover,
  :visited,
  :active {
    color: #000;
  }
`;

const ListItem = styled.li`
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Title = styled.p`
  text-align: left;
  font-weight: bold;
  margin-top: 0.3rem;
  font-size: 1rem;
  line-height: 1rem;
  height: 2rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
`;

export default ({ videos }) => (
  <List>
    {videos.map((video, index) => (
      <Link
        key={index}
        href={`https://www.youtube.com/watch?v=${
          video.snippet.resourceId.videoId
        }`}
      >
        <ListItem>
          <Thumbnail
            src={video.snippet.thumbnails.maxres.url}
            alt="thumbnail"
          />
          <Title title={video.snippet.title}>{video.snippet.title}</Title>
        </ListItem>
      </Link>
    ))}
  </List>
);
