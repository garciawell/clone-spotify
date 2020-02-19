import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '~/store/ducks/player';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Author,
  Title,
  Controls,
  ControlIcon,
  ControlButton,
} from './styles';

const Player = ({
  player, currentEpisode, pause, play, next, prev,
}) => player.current && (
<Container>
  <CoverBackground source={{ uri: currentEpisode.artwork }} />
  <EpisodeInfo>
    <Title>{currentEpisode.title}</Title>
    <Author>{currentEpisode.artist}</Author>
  </EpisodeInfo>

  <Controls>
    <ControlButton onPress={prev}>
      <ControlIcon name="skip-previous" />
    </ControlButton>
    <ControlButton onPress={player.playing ? pause : play}>
      <ControlIcon name={player.playing ? 'pause-circle-filled' : 'play-circle-filled'} />
    </ControlButton>
    <ControlButton onPress={next}>
      <ControlIcon name="skip-next" />
    </ControlButton>
  </Controls>
</Container>
);

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

const mapStateToProps = state => ({
  player: state.player,
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(episode => episode.id === state.player.current)
    : null,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
