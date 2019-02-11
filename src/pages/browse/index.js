import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>Relaxe ao som de um bom e velho Rock.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>Relaxe ao som de um bom e velho Rock.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>Relaxe ao som de um bom e velho Rock.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>Relaxe ao som de um bom e velho Rock.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
