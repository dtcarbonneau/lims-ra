// in src/users.js
import React, {Fragment} from 'react';
import { Filter, List, Datagrid, TextField, EmailField, ReferenceField, Resource,
        ReferenceInput, SelectInput, NumberField, DateField, EditButton, Pagination,
        Edit, SimpleForm, TextInput, DateInput, NumberInput, BulkDeleteButton, Create,
        FormDataConsumer, Toolbar} from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';
import ShipSampButton from './ShipSampButton';
import InsertSamplesButton from './SelectLocationsButton.js';
import { Field } from 'react-final-form';
import SaveFunction  from './SaveFunction';
//import InsertManyButton from './InsertMany';

const SamplesFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Technician" source="u_id" reference="users">
            <SelectInput optionText="last_name" />
        </ReferenceInput>
        <ReferenceInput label="Project" source="p_id" reference="projects">
            <SelectInput optionText="p_name" />
        </ReferenceInput>
        <ReferenceInput label="Status" source="ss_id" reference="s_status">
            <SelectInput optionText="ss_name" />
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

const InsertSamplesBulkActionButtons = props => (
    <Fragment>
        <InsertSamplesButton
            label="Choose Samples" {...props} component="input"/>
        <BulkDeleteButton{...props}/>
    </Fragment>
);

//Simple Form
const manipulateSampleInput = (stringSamples, dups) => {
    let samps = stringSamples.split(" ");
    return samps;
  }



export const SampleCreate = props => (
         <SimpleForm {...props} save={SaveFunction}>
            {console.log('SampleCreate', props)}
           <ReferenceInput source="u_id" reference="users" label="User">
             <SelectInput optionText="last_name" />
           </ReferenceInput>
           <ReferenceInput source="ss_id" reference="s_status" label="Status">
             <SelectInput optionText="ss_name" />
           </ReferenceInput>
           <ReferenceInput source="p_id" reference="projects" label="Projects">
             <SelectInput optionText="p_name" />
           </ReferenceInput>
           <NumberInput source="dups" />
           <FormDataConsumer>
             {({ formData, ...rest }) =>
                <TextInput
                  source="samp_list"
                  label="Sample List"
                  parse={samps => manipulateSampleInput(samps, formData.dups)}
                  {...rest}
              />}
           </FormDataConsumer>
           <FormDataConsumer>
             {({ formData, ...rest }) =>
                 formData.dups &&
                 formData.samp_list &&
                <Fragment>
                  <p>
                    Slots needed for Storage: {Math.ceil(formData.samp_list.length  / 10) * 10 * formData.dups }
                  </p>
              </Fragment>}
           </FormDataConsumer>
           <DateInput source="date_cryo" label="Cryo Date" />
           <DateInput source="date_exp" label="Expiration Date"/>
           <FormDataConsumer>
             {({ formData, ...rest }) =>
              formData.dups &&
              formData.samp_list &&
               <Resource
                source="locs"
                name="get_avail_store"
                list={AvailStoreList}
                options={{ myCustomAttr: formData.dups , sampleList: formData.samp_list, slectedIds: formData.storageIds}}
                {...rest}
             />}
          </FormDataConsumer>
         </SimpleForm>
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
    <List filters={<SamplesFilter/>}{...props} bulkActionButtons={<SamplesBulkActionButtons />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50]} total={50} />} >
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="sa_name" label="Sample"/>
            <ReferenceField label="User" source="u_id" reference="users">
                <TextField source="last_name" label="Technician" />
            </ReferenceField>
            <ReferenceField label="Status" source="ss_id" reference="s_status">
                <TextField source="ss_name" label="Status" />
            </ReferenceField>
            <ReferenceField label="Project" source="p_id" reference="projects">
                <TextField source="p_name" label="Project" />
            </ReferenceField>
            <DateField source="date_cryo" label="Cryo Date" />
            <DateField source="date_exp" label="Expiration Date"/>
            <EditButton/>
        </Datagrid>
    </List>
);




export const AvailStoreList = props => (
    <List {...props} bulkActionButtons={<InsertSamplesBulkActionButtons {...props} />} filter={{myCustomAttr: props.options.myCustomAttr, ids: []}}
    title="Available Storage">
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
