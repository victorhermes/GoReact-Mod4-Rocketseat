import { combineReducers } from 'redux';

// reducers
import playlists from './playlists';
import playlistDetails from './playlistDetails';

export default combineReducers({
  playlists,
  playlistDetails,
});
