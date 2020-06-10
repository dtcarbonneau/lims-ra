import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './limsDataProvider';
import {SampleList, SampleEdit, SampleCreate} from './samples'
import {ProjectList, ProjectCreate} from './projects'
import {UserList, UserCreate} from './users'

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="samples" list={SampleList} edit={SampleEdit} create={SampleCreate}/>
          <Resource name="users" list={UserList} create={UserCreate} />
          <Resource name="projects" list={ProjectList} create={ProjectCreate}/>
          <Resource name="s_status" />
          <Resource name="get_avail_store" />
      </Admin>
  );

  export default App;
