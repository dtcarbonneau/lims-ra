import { Field } from 'react-final-form';
import React, { Fragment, useState, Component } from 'react';
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
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './limsDataProvider';
import {SampleList} from './samples'
import {AvailStoreList} from './get_avail_store'


import { MDBDataTable, MDBInput } from 'mdbreact';
// import  from 'mdb-react-table-editor';

class LatLngInput extends Component {

  constructor(props) {
    super(props)
  }

  // toggleCheck = e => {
  //   let checkedArr = this.state.checked;
  //   checkedArr.filter(name => name === e.target.id)[0]
  //     ? checkedArr = checkedArr.filter(name => name !== e.target.id)
  //     : checkedArr.push(e.target.id);
  //   this.setState({checked: checkedArr})
  // };
  //
  // isChecked = id => this.state.checked.filter(name => name === id)[0] ? true : false


  render() {
    // const data = {
    //   columns: [
    //     {
    //       label: 'Check',
    //       field: 'check',
    //       sort: 'disabled',
    //       width: 20
    //     },
    //     {
    //       label: 'Name',
    //       field: 'name',
    //       sort: 'asc',
    //       width: 150
    //     },
    //     {
    //       label: 'Position',
    //       field: 'position',
    //       sort: 'asc',
    //       width: 270
    //     },
    //     {
    //       label: 'Office',
    //       field: 'office',
    //       sort: 'asc',
    //       width: 200
    //     },
    //     {
    //       label: 'Age',
    //       field: 'age',
    //       sort: 'asc',
    //       width: 100
    //     },
    //     {
    //       label: 'Start date',
    //       field: 'date',
    //       sort: 'asc',
    //       width: 150
    //     },
    //     {
    //       label: 'Salary',
    //       field: 'salary',
    //       sort: 'asc',
    //       width: 100
    //     }
    //   ],
    //   rows: [
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox1' onClick={this.toggleCheck} checked={this.isChecked('checkbox1')}/>,
    //       name: 'Tiger Nixon',
    //       position: 'System Architect',
    //       office: 'Edinburgh',
    //       age: '61',
    //       date: '2011/04/25',
    //       salary: '$320'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox2' onClick={this.toggleCheck} checked={this.isChecked('checkbox2')}/>,
    //       name: 'Garrett Winters',
    //       position: 'Accountant',
    //       office: 'Tokyo',
    //       age: '63',
    //       date: '2011/07/25',
    //       salary: '$170'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox3' onClick={this.toggleCheck} checked={this.isChecked('checkbox3')}/>,
    //       name: 'Ashton Cox',
    //       position: 'Junior Technical Author',
    //       office: 'San Francisco',
    //       age: '66',
    //       date: '2009/01/12',
    //       salary: '$86'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox4' onClick={this.toggleCheck} checked={this.isChecked('checkbox4')}/>,
    //       name: 'Cedric Kelly',
    //       position: 'Senior Javascript Developer',
    //       office: 'Edinburgh',
    //       age: '22',
    //       date: '2012/03/29',
    //       salary: '$433'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox5' onClick={this.toggleCheck} checked={this.isChecked('checkbox5')}/>,
    //       name: 'Airi Satou',
    //       position: 'Accountant',
    //       office: 'Tokyo',
    //       age: '33',
    //       date: '2008/11/28',
    //       salary: '$162'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox6' onClick={this.toggleCheck} checked={this.isChecked('checkbox6')}/>,
    //       name: 'Brielle Williamson',
    //       position: 'Integration Specialist',
    //       office: 'New York',
    //       age: '61',
    //       date: '2012/12/02',
    //       salary: '$372'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox7' onClick={this.toggleCheck} checked={this.isChecked('checkbox7')}/>,
    //       name: 'Herrod Chandler',
    //       position: 'Sales Assistant',
    //       office: 'San Francisco',
    //       age: '59',
    //       date: '2012/08/06',
    //       salary: '$137'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox8' onClick={this.toggleCheck} checked={this.isChecked('checkbox8')}/>,
    //       name: 'Rhona Davidson',
    //       position: 'Integration Specialist',
    //       office: 'Tokyo',
    //       age: '55',
    //       date: '2010/10/14',
    //       salary: '$327'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox9' onClick={this.toggleCheck} checked={this.isChecked('checkbox9')}/>,
    //       name: 'Colleen Hurst',
    //       position: 'Javascript Developer',
    //       office: 'San Francisco',
    //       age: '39',
    //       date: '2009/09/15',
    //       salary: '$205'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox10' onClick={this.toggleCheck} checked={this.isChecked('checkbox10')}/>,
    //       name: 'Sonya Frost',
    //       position: 'Software Engineer',
    //       office: 'Edinburgh',
    //       age: '23',
    //       date: '2008/12/13',
    //       salary: '$103'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox11' onClick={this.toggleCheck} checked={this.isChecked('checkbox11')}/>,
    //       name: 'Jena Gaines',
    //       position: 'Office Manager',
    //       office: 'London',
    //       age: '30',
    //       date: '2008/12/19',
    //       salary: '$90'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox1' onClick={this.toggleCheck} checked={this.isChecked('checkbox12')}/>,
    //       name: 'Quinn Flynn',
    //       position: 'Support Lead',
    //       office: 'Edinburgh',
    //       age: '22',
    //       date: '2013/03/03',
    //       salary: '$342'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox13' onClick={this.toggleCheck} checked={this.isChecked('checkbox13')}/>,
    //       name: 'Charde Marshall',
    //       position: 'Regional Director',
    //       office: 'San Francisco',
    //       age: '36',
    //       date: '2008/10/16',
    //       salary: '$470'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox14' onClick={this.toggleCheck} checked={this.isChecked('checkbox14')}/>,
    //       name: 'Haley Kennedy',
    //       position: 'Senior Marketing Designer',
    //       office: 'London',
    //       age: '43',
    //       date: '2012/12/18',
    //       salary: '$313'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox15' onClick={this.toggleCheck} checked={this.isChecked('checkbox15')}/>,
    //       name: 'Tatyana Fitzpatrick',
    //       position: 'Regional Director',
    //       office: 'London',
    //       age: '19',
    //       date: '2010/03/17',
    //       salary: '$385'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox16' onClick={this.toggleCheck} checked={this.isChecked('checkbox16')}/>,
    //       name: 'Michael Silva',
    //       position: 'Marketing Designer',
    //       office: 'London',
    //       age: '66',
    //       date: '2012/11/27',
    //       salary: '$198'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox17' onClick={this.toggleCheck} checked={this.isChecked('checkbox17')}/>,
    //       name: 'Paul Byrd',
    //       position: 'Chief Financial Officer (CFO)',
    //       office: 'New York',
    //       age: '64',
    //       date: '2010/06/09',
    //       salary: '$725'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox18' onClick={this.toggleCheck} checked={this.isChecked('checkbox18')}/>,
    //       name: 'Gloria Little',
    //       position: 'Systems Administrator',
    //       office: 'New York',
    //       age: '59',
    //       date: '2009/04/10',
    //       salary: '$237'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox19' onClick={this.toggleCheck} checked={this.isChecked('checkbox19')}/>,
    //       name: 'Bradley Greer',
    //       position: 'Software Engineer',
    //       office: 'London',
    //       age: '41',
    //       date: '2012/10/13',
    //       salary: '$132'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox20' onClick={this.toggleCheck} checked={this.isChecked('checkbox20')}/>,
    //       name: 'Dai Rios',
    //       position: 'Personnel Lead',
    //       office: 'Edinburgh',
    //       age: '35',
    //       date: '2012/09/26',
    //       salary: '$217'
    //     },
    //     {
    //       check: <MDBInput label=' ' type='checkbox' id='checkbox21' onClick={this.toggleCheck} checked={this.isChecked('checkbox21')}/>,
    //       name: 'Jenette Caldwell',
    //       position: 'Development Lead',
    //       office: 'New York',
    //       age: '30',
    //       date: '2011/09/03',
    //       salary: '$345'
    //     }
    //   ]
    // };

    // return <MDBDataTable color="primary-color" striped bordered hover data={data} />;
    return(
      <Resource name="get_avail_store" list={AvailStoreList}/>
  );
  }
}

export default LatLngInput;
//   const columns = [
//       {
//         key: "id",
//         name: "ID"
//       },
//       {
//         key: "title",
//         name: "Title"
//       },
//       {
//         key: "count",
//         name: "Count"
//       }
//     ];
//
//   let rows = [];
//   for (let i = 1; i < 1000; i++) {
//       rows.push({
//         id: i,
//         title: "Title " + i,
//         count: i * 1000
//       });
//     }
//   const selectedIndexes = [];
//
//   const rowGetter = (i) => {
//     return this.state.rows[i];
//   };
//
//   const onRowsSelected = (rows) => {
//     this.setState({
//       selectedIndexes: this.state.selectedIndexes.concat(
//         rows.map(r => r.rowIdx)
//       )
//     });
//   };
//
//   const onRowsDeselected = (rows) => {
//     let rowIndexes = rows.map(r => r.rowIdx);
//     this.setState({
//       selectedIndexes: this.state.selectedIndexes.filter(
//         i => rowIndexes.indexOf(i) === -1
//       )
//     });
//   };
//
// const LatLngInput = () => {
//   // const [gridState, setGridState] = React.useState<any>(rows);
//
//   // const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
//   //   setGridState(gridState => {
//   //     const rows = gridState.slice();
//   //     for (let i = fromRow; i <= toRow; i++) {
//   //       rows[i] = { ...rows[i], ...updated };
//   //     }
//   //     return { rows };
//   //   });
//   // };
//
//   const rowText = selectedIndexes.length === 1 ? "row" : "rows";
//
//     return(
//       <span>
//         <div>
//           <span>
//             {selectedIndexes.length} {rowText} selected
//           </span>
//           <ReactDataGrid
//             columns={columns}
//             rows={rows}
//             rowGetter={rowGetter}
//             rowsCount={rows.length}
//             minHeight={500}
//             rowSelection={{
//               showCheckbox: true,
//               enableShiftSelect: true,
//               onRowsSelected: onRowsSelected,
//               onRowsDeselected: onRowsDeselected,
//               selectBy: {
//                 indexes: selectedIndexes
//               }
//             }}
//           />
//           </div>
//         </span>
//       )
// };
// export default LatLngInput;
