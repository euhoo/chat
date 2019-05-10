import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannelAction]: (state, action) => {
    const { byId, allIds } = state;
    const channel = action.payload.data.attributes;
    return {
      byId: { ...byId, [channel.id]: channel },
      allIds: [channel.id, ...allIds],
    };
  },
  [actions.removeChannelAction]: (state, action) => {
    const { byId, allIds } = state;
    const { id } = action.payload.data;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [actions.renameChannelAction]: (state, action) => {
    const { id, name } = action.payload.data.attributes;
    const newState = { ...state };
    newState.byId[id].name = name;
    return newState;
  },
}, { byId: {}, allIds: [] });

const messages = handleActions({
  [actions.addMessageAction]: (state, action) => {
    const { attributes } = action.payload.data;
    return [attributes, ...state];
  },
  [actions.removeChannelAction]: (state, action) => {
    const { id } = action.payload.data;
    return state.filter(message => message.channelId !== id);
  },
}, []);

const currentChannelId = handleActions({
  [actions.changeChannelAction]: (state, action) => {
    const newState = action.payload;
    return newState;
  },
}, '');

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
