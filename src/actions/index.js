import { createAction } from 'redux-actions';

export const addChannelAction = createAction('CHANNEL_ADD');
export const removeChannelAction = createAction('CHANNEL_REMOVE');
export const renameChannelAction = createAction('CHANNEL_RENAME');
export const addMessageAction = createAction('MESSAGE_ADD');
export const changeChannelAction = createAction('CHANNEL_CHANGE');
