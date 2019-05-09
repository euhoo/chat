import { createAction } from 'redux-actions';

export const addChannel = createAction('CHANNEL_ADD');

export const removeChannel = createAction('CHANNEL_REMOVE');

export const renameChannel = createAction('CHANNEL_RENAME');

export const addMessage = createAction('MESSAGE_ADD');

export const changeChannel = createAction('CHANNEL_CHANGE');
