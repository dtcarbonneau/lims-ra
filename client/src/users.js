import React, {Fragment} from 'react';
import { Filter, List, Datagrid, TextField, EmailField, ReferenceField, Resource,
        ReferenceInput, SelectInput, NumberField, DateField, EditButton,
        Edit, SimpleForm, TextInput, DateInput, NumberInput, BulkDeleteButton, Create,
        FormDataConsumer} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" label="First Name"/>
            <TextField source="last_name" label="Last Name"/>
            <TextField source="email" label="Email"/>
            <TextField source="username" label="Username"/>
        </Datagrid>
    </List>
);
export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="first_name" label="First Name"/>
          <TextInput source="last_name" label="Last Name"/>
          <TextInput source="email" label="Email"/>
          <TextInput source="username" label="Username"/>
          <TextInput source="password" label="Password"/>
        </SimpleForm>
    </Create>
);
