import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './limsDataProvider';
import {SampleList} from './samples'

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="samples" list={SampleList} />
          <Resource name="users" />
          <Resource name="projects" />
      </Admin>
  );

  export default App;