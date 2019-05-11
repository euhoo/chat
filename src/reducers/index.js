import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import {
  addChannelAction, removeChannelAction, renameChannelAction, addMessageAction, changeChannelAction,
  openModalAction, closeModalAction,
} from '../actions';

const channels = handleActions({
  [addChannelAction]: (state, action) => {
    const { byId, allIds } = state;
    const channel = action.payload.data.attributes;
    return {
      byId: { ...byId, [channel.id]: channel },
      allIds: [channel.id, ...allIds],
    };
  },
  [removeChannelAction]: (state, action) => {
    const { byId, allIds } = state;
    const { id } = action.payload.data;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [renameChannelAction]: (state, action) => {
    const { id, name } = action.payload.data.attributes;
    const newState = { ...state };
    newState.byId[id].name = name;
    return newState;
  },
}, { byId: {}, allIds: [] });

const messages = handleActions({
  [addMessageAction]: (state, action) => {
    const { attributes } = action.payload.data;
    return [attributes, ...state];
  },
  [removeChannelAction]: (state, action) => {
    const { id } = action.payload.data;
    return state.filter(message => message.channelId !== id);
  },
}, []);

const currentChannelId = handleActions({
  [changeChannelAction]: (state, action) => {
    const newState = action.payload;
    return newState;
  },
}, '');

const modal = handleActions({
  [openModalAction](state, { payload: { data } }) {
    return { show: true, data };
  },
  [closeModalAction]() {
    return { show: false, data: {} };
  },
}, { show: false, data: {} });

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  modal,
  form: formReducer,
});
