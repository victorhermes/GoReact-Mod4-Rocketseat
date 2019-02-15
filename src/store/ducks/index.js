import { combineReducers } from 'redux';

// reducers
import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
});
