import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './limsDataProvider';
import {SampleList, SampleEdit, SampleCreate} from './samples'

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="samples" list={SampleList} edit={SampleEdit} create={SampleCreate}/>
          <Resource name="users" />
          <Resource name="projects" />
          <Resource name="s_status" />
          <Resource name = "get_avail_store()" />
      </Admin>
  );

  export default App;
