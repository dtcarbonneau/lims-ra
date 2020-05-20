import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './limsDataProvider';
import {SampleList, SampleEdit} from './samples'

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="samples" list={SampleList} edit = {SampleEdit} />
          <Resource name="users" />
          <Resource name="projects" />
          <Resource name="s_status" />
      </Admin>
  );

  export default App;
