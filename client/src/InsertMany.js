import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    ReferenceArrayInput,
    SelectArrayInput
    } from 'react-admin';

import LatLngInput from './LatLongInput';
import {SampleList} from './samples'
import {AvailStoreList} from './get_avail_store'



const InsertManyButton = (props) => {
    // const [open, setOpen] = useState(false);
    // const refresh = useRefresh();
    // const notify = useNotify();
    // const unselectAll = useUnselectAll();
    // const [updateMany, { loading }] = useUpdateMany(
    //     'samples',
    //     selectedIds,
    //     { ss_id: -1 },
    //     {
    //         onSuccess: () => {
    //             refresh();
    //             notify('Samples updated');
    //             unselectAll('samples');
    //         },
    //         onFailure: error => notify('Error: samples not updated', 'warning'),
    //     }
    // );
    // const handleClick = () => setOpen(true);
    // const handleDialogClose = () => setOpen(false);
    //
    // const handleConfirm = () => {
    //     updateMany();
    //     setOpen(false);
    // };

    return (
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
        <TextInput source="samp_list" label="Sample List"/>
        <LatLngInput></LatLngInput>
        <DateInput source="date_cryo" label="Cryo Date" />
        <DateInput source="date_exp" label="Expiration Date"/>
      </SimpleForm>
    );
}

// <ReferenceInput source="id" reference="get_avail_store" label="Storage Options">
//   <SelectInput optionText="freezer" />
// </ReferenceInput>

// <ReferenceField source="u_id" reference="users">
//     <TextField source="last_name" label="Technician" />
// </ReferenceField>
// <ReferenceField source="ss_id" reference="s_status">
//     <TextField source="ss_name" label="Status" />
// </ReferenceField>
// <ReferenceField source="p_id" reference="projects">
//     <TextField source="p_name" label="Project" />
// </ReferenceField>
// <TextField source="loc" />
// <DateField source="date_cryo" />
// <DateField source="date_exp" />
export default InsertManyButton;
