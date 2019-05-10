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
      byId: [...byId, { [channel.id]: channel }],
      allIds: [channel.id, ...allIds],
    };
  },
  [actions.removeChannelAction]: (state, action) => {
    const { byId, allIds } = state;
    const { id } = action.payload;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [actions.renameChannelAction]: (state, action) => {
    const { id } = action.payload;
    const task = state.byId[id];
    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [task.id]: updatedTask },
    };
  },
}, { byId: {}, allIds: [] });

const messages = handleActions({
  [actions.addMessageAction]: (state, action) => {
    const { attributes } = action.payload.data;
    return [...state, attributes];
  },
  [actions.removeChannelAction]: (state, action) => {
    const { id } = action.payload;
    return state.filter(message => message.channelId !== id);
  },
}, []);

const currentChannelId = handleActions({
  [actions.changeChannelAction]: (state, action) => {
    const { attributes } = action.payload;
    return attributes;
  },
}, '');

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
