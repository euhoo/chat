import React from 'react';
import faker from 'faker';
import cookies from 'js-cookie';
import queries from './queries';


if (!cookies.get('name')) {
  const randomName = faker.name.findName();
  cookies.set('name', randomName);
}
export const userName = cookies.get('name');


export default React.createContext({ userName, queries });
