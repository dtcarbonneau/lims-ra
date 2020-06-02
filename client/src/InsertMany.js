import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    SimpleForm,
    List,
    Datagrid, ReferenceInput, ReferenceField, TextField,
    SelectInput,
    TextInput,
    DateInput
    } from 'react-admin';

const InsertManyButton = () => {
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
        <ReferenceInput source="id" reference="get_avail_store" label="Storage Options">
          <SelectInput optionText="first_cell" />
        </ReferenceInput>
        <List>
        <Datagrid>
            <ReferenceField source="id" reference="get_avail_store">
                <TextField source="id" label="id" />
            </ReferenceField>
        </Datagrid>
        </List>
        <TextInput source="samp_list" label="Sample List"/>
        <DateInput source="date_cryo" label="Cryo Date" />
        <DateInput source="date_exp" label="Expiration Date"/>
      </SimpleForm>
    );
}

export default InsertManyButton;
