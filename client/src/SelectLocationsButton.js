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
  console.log(props);
  // defaultValue: props.selectedIds;

    return (
      <span>
        <Field
              name="storageIds" 
              component="input"
              disabled = {true}
              type="array"
              defaultValue={props.selectedIds}
              value={props.selectedIds}
        />
      </span>
    );
}

export default InsertSamplesButton;
// defaultValue={{ selectedSamples: props.selectedIds}}
