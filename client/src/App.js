import React from 'react';
<<<<<<< HEAD
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
=======
import { Admin, Resource, ListGuesser} from 'react-admin';
>>>>>>> e85842b47436df91ac01dee63ac288b3256deae9
import dataProvider from './limsDataProvider';
import {SampleList, SampleEdit} from './samples'

const App = () => (
      <Admin dataProvider={dataProvider}>
<<<<<<< HEAD
          <Resource name="samples" list={SampleList} edit = {SampleEdit} />
=======
          <Resource name="samples" list={SampleList} edit={SampleEdit} />
>>>>>>> e85842b47436df91ac01dee63ac288b3256deae9
          <Resource name="users" />
          <Resource name="projects" />
          <Resource name="s_status" />
      </Admin>
  );

  export default App;
