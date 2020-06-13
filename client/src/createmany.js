import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';

export const saveFunction = (props) =>{
  //console.log('hello', props);

  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  const sampArray = [ 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9',
      's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19', 's20',
      's21', 's22', 's23', 's24', 's25', 's26', 's27', 's28', 's29', 's30', 's31']
  
  //const dupes = 3
  
  const storeArray = [
    {'id':1, 'first_cell': '000100', 'slot_size':30},
    {'id':2, 'first_cell': '010000', 'slot_size':60},
    {'id':3, 'first_cell': '010160', 'slot_size':30}
  ]
  
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
  
  console.log(ex2.map(r_c_calc(3)));
}