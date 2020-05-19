// in src/users.js
import React from 'react';
import { Filter, List, Datagrid, Edit, EditButton, SimpleForm, TextInput, TextField, EmailField, ReferenceField,
        ReferenceInput, SelectInput, NumberField, DateField } from 'react-admin';

const SamplesFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Technician" source="u_id" reference="users">
            <SelectInput optionText="last_name" />
        </ReferenceInput>
        <ReferenceInput label="Project" source="p_id" reference="projects">
            <SelectInput optionText="p_name" />
        </ReferenceInput>
    </Filter>
);


export const SampleList = props => (
    <List filters={<SamplesFilter/>}{...props} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="sa_name" />
            <ReferenceField source="u_id" reference="users">
                <TextField source="last_name" label="Technician" />
            </ReferenceField>
            {/*<ReferenceField source="ss_id" reference="sses"><TextField source="id" /></ReferenceField>*/}
            <ReferenceField source="p_id" reference="projects">
                <TextField source="p_name" label="Project" />
            </ReferenceField>
            <TextField source="loc" />
            <DateField source="date_cryo" />
            <DateField source="date_exp" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SampleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           <ReferenceInput source="p_id" reference="projects">
              <SelectInput optionText="p_name" />
           </ReferenceInput>
            <ReferenceInput source="u_id" reference="users">
               <SelectInput optionText="last_name" />
            </ReferenceInput>
            <TextInput source="loc" />
        </SimpleForm>
    </Edit>
);
