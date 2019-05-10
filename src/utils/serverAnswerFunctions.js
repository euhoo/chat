import * as actions from '../actions';

export const newChannel = (data) => {
  console.log(data);
};

export const removeChannel = (data) => {
  console.log(data);
};

export const renameChannel = (data) => {
  console.log(data);
};

export const addMessage = (data, store) => {
  const { addMessageAction } = actions;
  store.dispatch(addMessageAction(data));
  console.log(store.getState().messages);
};
