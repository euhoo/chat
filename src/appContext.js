import React from 'react';
import faker from 'faker';
import cookies from 'js-cookie';
import queries from './queries';


if (!cookies.get('name')) {
  const randomName = faker.name.findName();
  cookies.set('name', randomName);
}
const name = cookies.get('name');


export default React.createContext({ name, queries });
