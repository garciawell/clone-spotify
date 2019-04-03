import React from 'react';
import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const playlist = () => (
  <Container>
    <Header>
      <img
        src="data:image/jpeg;base64,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"
        alt="Album"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <Songlist cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
);

export default playlist;
