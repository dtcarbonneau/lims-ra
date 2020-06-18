import dataProvider from './limsDataProvider'
const props = {"u_id":3,"ss_id":-1,"p_id":5,"dups":3,"samp_list":["s1","s2","s3","s4","s5","s6"],"storageIds":[2,3,4]}

const SaveFunction = (props) => {  
  //const {u_id, ss_id, p_id, dups, samp_list, storageIds} = props;

  const makeStorage = (store_start,dups) => {
    console.log(store_start);
    //stor_start is an array of record objects returned from the dataProvider
    //copier takes a first_cell element and copies it slot_size times and also add an array of sequential integers
    //to represent filling order
    const copier = (acc, cur) => acc.concat([[Array(cur['slot_size']).fill(cur['first_cell']),Array.from(Array(cur['slot_size']).keys())]]);
    const store_start1 = store_start.reduce(copier,[]);
    console.log(store_start1);
    //tuppler takes separate first_cell and sequenetial integer arrays and combines into a tupple-like structure. It also flattens
    //out the id dimension of the array
    const tuppler = (acc, cur) => acc.concat(cur[0].map((s,index) => [s,cur[1][index]]));
    const store_start2 = store_start1.reduce(tuppler,[]);
    
    //r_c_calc detemines row and column values consistent with the sequence order of the cell and
    //updates the first_cell value accordingly
    const r_c_calc = (dups) => {
      //we need to pass an extra parameter to the map function so we return a function taking dups as an argument
      return (a)=>{
        let samples = Math.floor(a[1]/dups);
        let batches= Math.floor(samples/10);
        let col = Math.floor(a[1]/dups)-batches*10;
        //the parseInt term adds the starting row which may not be zero
        let row= a[1]%dups + Math.floor(samples/10)*dups + parseInt(a[0].substring(4,5));
        return a[0].substring(0,4)+row+col;
      }
    }
    return store_start2.map(r_c_calc(dups));
  }
  
  //create array for multiple insert
  const store_samples = (props, store_start) => {
    console.log(props.samp_list);
    //build aliquot list from samples using dups
    const aliquots = props.samp_list[0].split(',').reduce((acc, cur) => acc.concat(Array(props.dups).fill(cur)),[]);
    //bulid storage from start cell and slot size data
    const storage = makeStorage(store_start,props.dups);
    return aliquots.map((s,index) => [s, props.u_id, props.ss_id, props.p_id, storage[index]])
  }
  //store_samples(props,res.data
  //return (store_samples(props,store_start));

  //res => console.log(JSON.stringify(store_samples(props,res.data)))
  dataProvider.
    getList('get_avail_store',
      {filter: {"myCustomAttr": props.dups, "ids": props.storageIds},
      pagination: {page: 1, perPage: 25},
      sort: {field: "id", order: "DESC"}})
      .then (store_start => dataProvider.
        createMany('samples',
        {'fields':['sa_name','u_id','ss_id','p_id','loc'],
        'data':store_samples(props,store_start.data)}))
      
      //(data => {
      //  dataProvider.
      //  createMany('get_avail_store',
      //  {'fields':['sa_name','u_id','ss_id','p_id','loc'],
      //  'data':{data}
      //  });)
      //}
    }
export default SaveFunction;
