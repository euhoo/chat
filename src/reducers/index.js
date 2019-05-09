import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel]: (state, action) => {
    const { byId, allIds } = state;
    const { channel } = action.payload;
    return {
      byId: { ...byId, [channel.id]: channel },
      allIds: [channel.id, ...allIds],
    };
  },
  [actions.removeChannel]: (state, action) => {
    const { byId, allIds } = state;
    const { id } = action.payload;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [actions.renameChannel]: (state, action) => {
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
  [actions.addMessage]: (state, action) => {
    const { attributes } = action.payload;
    return [...state, attributes];
  },
  [actions.removeChannel]: (state, action) => {
    const { id } = action.payload;
    return state.filter(message => message.channelId !== id);
  },
}, []);

const currentChannelId = handleActions({
  [actions.changeChannel]: (state, action) => {
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
