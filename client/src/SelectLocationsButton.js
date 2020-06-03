import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    useInput,
    addField,
    TextInput
} from 'react-admin';
import { Field } from 'react-final-form';

const InsertSamplesButton = (props) => {

    return (
          <span>
            <TextInput source="Ids of Locations Chosen" value={props.selectedIds}/>
          </span>


    );
}

export default InsertSamplesButton;
