// in src/users.js
import React, {Fragment} from 'react';
import { Filter, List, Datagrid, TextField, EmailField, ReferenceField, Resource,
        ReferenceInput, SelectInput, NumberField, DateField, EditButton,
        Edit, SimpleForm, TextInput, DateInput, NumberInput, BulkDeleteButton, Create} from 'react-admin';
import ShipSampButton from './ShipSampButton';
//import InsertManyButton from './InsertMany';

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

const SamplesBulkActionButtons = props => (
    <Fragment>
        <ShipSampButton label="Ship Samples" {...props} />
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </Fragment>
);

export const SampleCreate = props => (
    <Create {...props}>
         <SimpleForm>
           <ReferenceInput source="u_id" reference="users" label="User">
             <SelectInput optionText="last_name" />
           </ReferenceInput>
           <ReferenceInput source="ss_id" reference="s_status" label="Status">
             <SelectInput optionText="ss_name" />
           </ReferenceInput>
           <ReferenceInput source="p_id" reference="projects" label="Projects">
             <SelectInput optionText="p_name" />
           </ReferenceInput>
           <TextInput source="loc" label="Location"/>
           <DateInput source="date_cryo" label="Cryo Date" />
           <DateInput source="date_exp" label="Expiration Date"/>
           <Resource name="get_avail_store" list={AvailStoreList}/>
         </SimpleForm>
    </Create>

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
    <List filters={<SamplesFilter/>}{...props} bulkActionButtons={<SamplesBulkActionButtons />} >
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
            <EditButton/>
        </Datagrid>
    </List>
);

export const AvailStoreList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="freezer"/>
            <TextField source="rack"/>
            <TextField source="first_cell"/>
            <TextField source="slot_size"/>
        </Datagrid>
    </List>
);



// export const SampleCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//           <ReferenceInput source="u_id" reference="users" label="User">
//             <SelectInput optionText="last_name" />
//           </ReferenceInput>
//           <ReferenceInput source="ss_id" reference="s_status" label="Status">
//             <SelectInput optionText="ss_name" />
//           </ReferenceInput>
//           <ReferenceInput source="p_id" reference="projects" label="Projects">
//             <SelectInput optionText="p_name" />
//           </ReferenceInput>
//           <TextInput source="loc" label="Location"/>
//           <DateInput source="date_cryo" label="Cryo Date" />
//           <DateInput source="date_exp" label="Expiration Date"/>
//         </SimpleForm>
//     </Create>
// );

// export const SampleEdit = props => (
//     <Edit {...props}>
//         <SimpleForm>
//            <TextInput disabled source="id" />
//            <ReferenceInput source="p_id" reference="projects">
//               <SelectInput optionText="p_name" />
//            </ReferenceInput>
//             <ReferenceInput source="u_id" reference="users">
//                <SelectInput optionText="last_name" />
//             </ReferenceInput>
//             <TextInput source="loc" />
//         </SimpleForm>
//     </Edit>
// );