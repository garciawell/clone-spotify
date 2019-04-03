import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

import { Creators as PlayDetailsActions } from '../../store/ducks/playDetails';

class playlist extends Component {
  static propTypes = {
    getPlayDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    playDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match } = this.props;
    const { id } = match.params;
    const { getPlayDetailsRequest } = this.props;

    getPlayDetailsRequest(id);
  };

  renderDetails = () => {
    const { playDetails } = this.props;
    const playlistItem = playDetails.data;

    return (
      <Container>
        <Header>
          <img src={playlistItem.thumbnail} alt={playlistItem.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlistItem.title}</h1>
            {!!playlistItem.songs && (
            <p>
              {playlistItem.songs.length}
              {' '}
músicas
            </p>
            )}
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
            {!playlistItem.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlistItem.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </tr>
              ))
            )}
          </tbody>
        </Songlist>
      </Container>
    );
  };

  render() {
    const { playDetails } = this.props;

    return playDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playDetails: state.playDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(playlist);
