import React, {Fragment} from 'react';
import { Filter, List, Datagrid, TextField, EmailField, ReferenceField, Resource,
        ReferenceInput, SelectInput, NumberField, DateField, EditButton,
        Edit, SimpleForm, TextInput, DateInput, NumberInput, BulkDeleteButton, Create,
        FormDataConsumer} from 'react-admin';

export const ProjectList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="p_name" />
            <ReferenceField source="u_id" reference="users">
                <TextField source="last_name" label="Technician" />
            </ReferenceField>
            <TextField source="t_name" label="Target Name" />
            <TextField source="samp_type" label="Sample Type" />
            <DateField source="inv_date" label="Inventory Date"/>
            <NumberField source="sto_terms" label="Storage Terms" />
        </Datagrid>
    </List>
);
export const ProjectCreate = props => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="p_name" label="Project Name"/>
          <ReferenceInput source="u_id" reference="users" label="User">
            <SelectInput optionText="last_name" />
           </ReferenceInput>
          <TextInput source="t_name" label="Target Name"/>
          <TextInput source="samp_type" label="Sample Type"/>
          <DateInput source="inv_date" label="Inventory Date" />
          <NumberInput source="sto_terms" label="Storage Terms" />
        </SimpleForm>
    </Create>
);
