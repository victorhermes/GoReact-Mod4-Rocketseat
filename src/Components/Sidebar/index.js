import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a> Navegar </a>
        </li>
        <li>
          <a> Rádio </a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a> Seu Daily Mix </a>
        </li>
        <li>
          <a> Tocados recentemente </a>
        </li>
        <li>
          <a> Músicas </a>
        </li>
        <li>
          <a> Álbums </a>
        </li>
        <li>
          <a> Artistas </a>
        </li>
        <li>
          <a> Estações </a>
        </li>
        <li>
          <a> Arquivos locais </a>
        </li>
        <li>
          <a> Vídeos </a>
        </li>
        <li>
          <a> Podcasts </a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a> Só músicas boas </a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
