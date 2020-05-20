// in src/users.js
import React from 'react';
<<<<<<< HEAD
import { Filter, List, Datagrid, TextField, EmailField, ReferenceField, 
        ReferenceInput, SelectInput, NumberField, DateField, EditButton,
        Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';
=======
import { Filter, List, Datagrid, Edit, EditButton, SimpleForm, TextInput, TextField, EmailField, ReferenceField,
        ReferenceInput, SelectInput, NumberField, DateField } from 'react-admin';
>>>>>>> e85842b47436df91ac01dee63ac288b3256deae9

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

export const SampleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="sa_name" />
            <ReferenceInput source="u_id" reference="users"><SelectInput optionText="last_name" /></ReferenceInput>
            <ReferenceInput source="ss_id" reference="s_status"><SelectInput optionText="ss_name" /></ReferenceInput>
            <ReferenceInput source="p_id" reference="projects"><SelectInput optionText="p_name" /></ReferenceInput>
            <DateInput source="loc" />
            <NumberInput source="date_cryo" />
            <DateInput source="date_exp" />
        </SimpleForm>
    </Edit>
);

export const SampleList = props => (
    <List filters={<SamplesFilter/>}{...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="sa_name" />
            <ReferenceField source="u_id" reference="users">
                <TextField source="last_name" label="Technician" />
            </ReferenceField>
            <ReferenceField source="ss_id" reference="s_status">
                <TextField source="ss_name" label="Status" />
            </ReferenceField>
            <ReferenceField source="p_id" reference="projects">
                <TextField source="p_name" label="Project" />
            </ReferenceField>
            <TextField source="loc" />
            <DateField source="date_cryo" />
            <DateField source="date_exp" />
<<<<<<< HEAD
            <EditButton/>
=======
            <EditButton />
>>>>>>> e85842b47436df91ac01dee63ac288b3256deae9
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
