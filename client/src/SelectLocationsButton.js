import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useQueryWithStore,
    Loading,
    Error,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    useInput,
    addField,
    TextInput
} from 'react-admin';
import { Field } from 'react-final-form';

const InsertSamplesButton = props => {
  // console.log(props);
  const dups = props.options.myCustomAttr;
  const sampList = props.options.sampleList;
  const sampsToStore = Math.ceil(sampList.length  / 10) * 10 * dups;
  console.log(sampsToStore);

  const {data, loading, error} = useQueryWithStore({
    type: 'getList',
    resource: 'get_avail_store',
    payload: {filter: {"myCustomAttr": dups, "ids": props.selectedIds}, pagination: {page: 1, perPage: 25}, sort: {field: "id", order: "DESC"}}
  });

  let filled = 0;
  const selids = props.selectedIds;
  if (selids.length > 0 && data != undefined){
    data.forEach(datum => filled += datum.slot_size );
  }

  let neededSlots = sampsToStore - filled;
  if (neededSlots <= 0) {
    neededSlots = 0;
  }


    return (
      <Fragment>
        <p>Remaining Samples:{neededSlots}
        </p>

        <Field
              name="storageIds"
              component="input"
              disabled = {true}
              type="array"
              defaultValue={props.selectedIds}
              value={props.selectedIds}
        />
      </Fragment>
    );
}

export default InsertSamplesButton;
// defaultValue={{ selectedSamples: props.selectedIds}}
