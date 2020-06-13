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

  const sampArray = [ 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9',
      's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19', 's20',
      's21', 's22', 's23', 's24', 's25', 's26', 's27', 's28', 's29', 's30', 's31']
  
  const dupes = 3

  const storeArray = [
    {'id':1, 'first_cell': '000100', 'slot_size':30},
    {'id':2, 'first_cell': '010000', 'slot_size':60},
    {'id':3, 'first_cell': '010160', 'slot_size':30}
  ]

  const add = (acc, cur) => acc.concat([[Array(cur['slot_size']).fill(cur['first_cell'],),Array.from(Array(cur['slot_size']).keys())]]);
  
  const ex = storeArray.reduce(add,[]);
  
  //console.log(ex)

  const rowcol = (slot_start, slot_seq, dupes ) => {
    //const startrow = slot_start;
    const startrow = slot_start.substring(4,1)

    return startrow;
  }

  console.log(rowcol(ex[0][0][0]),ex[0][0],3)
}