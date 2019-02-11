import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg"
        alt="Cover"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock forever</h1>
        <p>13 músicas</p>

        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Numb</td>
          <td>Linkin Park</td>
          <td>Hiber Furied</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Numb</td>
          <td>Linkin Park</td>
          <td>Hiber Furied</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Numb</td>
          <td>Linkin Park</td>
          <td>Hiber Furied</td>
          <td>3:22</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
