import React from 'react';
import cookies from 'js-cookie';
import queries from './queries';

export default React.createContext({ userName: cookies.get('name'), queries });
