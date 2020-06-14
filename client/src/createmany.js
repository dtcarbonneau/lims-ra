import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    useQueryWithStore,
} from 'react-admin';
import logo from './logo.svg';
import './App.css';

export const saveFunction = (props) =>{
  console.log(props);

  const sampArray = props.samp_list;
  const dups = props.dups;
  const ids = props.selectedIds;

  const {storeArray, loading, error} = useQueryWithStore({
    type: 'getList',
    resource: 'get_avail_store',
    payload: {filter: {"myCustomAttr": dups, "ids": ids}, pagination: {page: 1, perPage: 25}, sort: {field: "id", order: "DESC"}}
  });

  // const storeArray = [
  //   {'id':1, 'first_cell': '000100', 'slot_size':30},
  //   {'id':2, 'first_cell': '010000', 'slot_size':60},
  //   {'id':3, 'first_cell': '010160', 'slot_size':30}
  // ]

  //copier takes a first_cell element and copies it slot_size times and also add an array of sequential integers
  //to represent filling order
  const copier = (acc, cur) => acc.concat([[Array(cur['slot_size']).fill(cur['first_cell'],),Array.from(Array(cur['slot_size']).keys())]]);
  const ex = storeArray.reduce(copier,[]);

  //tuppler takes separate first_cell and sequenetial integer arrays and combines into a tupple-like structure. It also flattens
  //out the id dimension of the array
  const tuppler = (acc, cur) => acc.concat(cur[0].map((s,index) => [s,cur[1][index]]));
  const ex2 = ex.reduce(tuppler,[]);

  //r_c_calc detemines row and column values consistent with the sequence order of the cell and
  //updates the first_cell value accordingly
  const r_c_calc = (dupes) => {
    return (a)=>{
      var samples = Math.floor(a[1]/dupes);
      var batches= Math.floor(samples/10);
      var col = Math.floor(a[1]/dupes)-batches*10;
      //the parseInt term adds the starting row which may not be zero
      var row= a[1]%dupes + Math.floor(samples/10)*dupes + parseInt(a[0].substring(4,5));
      var cell = a[0].substring(0,4)+row+col;
      return cell;
    }
  }
  return(
    <div>
      <p>You clicked 8 times</p>
    </div>
  );

  console.log(ex2.map(r_c_calc(3)));
}
