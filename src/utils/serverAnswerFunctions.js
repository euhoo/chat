import * as actions from '../actions';

export const renameChannel = (data) => {
};

export const removeChannel = (data, store) => {
  
  const { removeChannelAction } = actions;
  store.dispatch(removeChannelAction(data));  
};

export const newChannel = (data, store) => {
  
  const { addChannelAction } = actions;
  store.dispatch(addChannelAction(data));
};

export const addMessage = (data, store) => {
  const { addMessageAction } = actions;
  store.dispatch(addMessageAction(data));
};
