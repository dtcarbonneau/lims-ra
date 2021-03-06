import {createPool, sql} from 'slonik';
var querystring = require('querystring')
//const pool = createPool('postgresql://postgres@localhost:5432/lims_ra');
const pool = createPool('postgresql://limsuser:limspw@localhost:5433/lims');

var query = (q) => pool.query(q)


const postLogin = async (req, res) => {
  console.log('POSTUSER CALLED');

  const bools = [
    sql`TRUE`,
  ];

  const user = req.body;

  // Username
  if (user.username !== undefined) {
    bools.push(
      sql`username = ${user.username}`)
  }
  else{
    res.status(401);
    res.send('Must provide both username and password');
  }

  // Password
  if (user.password !== undefined) {
    bools.push(
      sql`password = ${user.password}`)
  }
  else{
    res.status(401);
    res.send('Must provide both username and password');
  }

  const {rows} =  await query(
    sql`SELECT * FROM users WHERE ${sql.join(bools, sql` AND `)}`);

  if (rows.length < 1) {
    console.log('FAILED RESPONSE');
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Range",'bytes:0-9/9');
    res.send(401);
    console.log(res.status);

  }
  else{
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Range",'bytes:0-9/9');
    res.send(rows);
    res.status(200);

  }

}

//Projects
const getProjects = async (req, res) => {
  const booleanExpressions = [
    sql`TRUE`,
  ];

  if (req.query.filter) {
    const queryString = JSON.parse(req.query.filter);
    if (queryString.id !== undefined) {
      booleanExpressions.push(
        sql`id = ANY(${sql.array(queryString.id, 'int4')})
      `);
      }
      //filter for user...
    if (queryString.u_id !== undefined) {
      booleanExpressions.push(
        sql`u_id = ${queryString.u_id}
      `);
    }

  }

  const {rows} =  await query(
    sql`SELECT * FROM projects WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const postProject = async (req, res) => {

  const proj = req.body;
  const columns = [];
  const values = [];

  console.log('Project Name', proj);
  if (proj.p_name !== undefined) {
    columns.push(
      sql`p_name`)
    values.push(
      sql`${proj.p_name}`)
  }

  if (proj.u_id !== undefined) {
    columns.push(
      sql`u_id`)
    values.push(
      sql`${proj.u_id}`)
  }

  if (proj.t_name !== undefined) {
    columns.push(
      sql`t_name`)
    values.push(
      sql`${proj.t_name}`)
  }

  if (proj.samp_type !== undefined) {
    columns.push(
      sql`samp_type`)
    values.push(
      sql`${proj.samp_type}`)
  }

  if (proj.inv_date !== undefined) {
    columns.push(
      sql`inv_date`)
    values.push(
      sql`${proj.inv_date}`)
  }

  if (proj.sto_terms !== undefined) {
    columns.push(
      sql`sto_terms`)
    values.push(
      sql`${proj.sto_terms}`)
  }

  const columnsj = sql.join(columns,sql` , `);

  const valuesj = sql.join(values,sql` , `);

  const {rows} =  await query(
    sql`INSERT INTO projects (${columnsj}) VALUES (${valuesj});`);
  res.send(rows);
}

//Users
const getUsers = async (req, res) => {
  const booleanExpressions = [
      sql`TRUE`,
    ];

  if (req.query.filter) {
    const queryString = JSON.parse(req.query.filter);
    if (queryString.id !== undefined) {
      booleanExpressions.push(
        sql`id = ANY(${sql.array(queryString.id, 'int4')})
      `);
    }
  }

  const {rows} =  await query(
    sql`SELECT * FROM users WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const postUser = async (req, res) => {
  console.log('POSTUSER CALLED');
  const user = req.body;
  const columns = [];
  const values = [];

  if (user.first_name !== undefined) {
    columns.push(
      sql`first_name`)
    values.push(
      sql`${user.first_name}`)
  }

  if (user.last_name !== undefined) {
    columns.push(
      sql`last_name`)
    values.push(
      sql`${user.last_name}`)
  }

  if (user.email !== undefined) {
    columns.push(
      sql`email`)
    values.push(
      sql`${user.email}`)
  }
  if (user.username !== undefined) {
    columns.push(
      sql`username`)
    values.push(
      sql`${user.username}`)
  }
  if (user.password !== undefined) {
    columns.push(
      sql`password`)
    values.push(
      sql`${user.password}`)
  }

  const columnsj = sql.join(columns,sql` , `);

  const valuesj = sql.join(values,sql` , `);
  const {rows} =  await query(
    sql`INSERT INTO users (${columnsj}) VALUES (${valuesj});`);
  res.send(rows);
}

//get Sample Status
const getSStatus = async (req, res) => {
  const booleanExpressions = [
      sql`TRUE`,
    ];

  if (req.query.filter) {
    const queryString = JSON.parse(req.query.filter);
    if (queryString.id !== undefined) {
      booleanExpressions.push(
        sql`id = ANY(${sql.array(queryString.id, 'int4')})
      `);
    }
  }

  const {rows} =  await query(
    sql`SELECT * FROM s_status WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

//Samples
const getSample = async (req, res) => {
  console.log('GETSAMPLE CALLED');
  const {rows} =  await query(
    sql`SELECT * FROM samples WHERE id =  ${req.params.id}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const getSamples = async (req, res) => {
  console.log('GETSAMPLES CALLED');

  const booleanExpressions = [
    sql`TRUE`,
  ];
  console.log('195');
  if (req.query.filter) {
    const queryString = JSON.parse(req.query.filter);
    console.log(queryString);
    if (queryString.id !== undefined) {
      booleanExpressions.push(
        sql`id = ANY(${sql.array(queryString.id, 'int4')})
      `);
      }
      //filter for user...
    console.log('204');
    if (queryString.u_id !== undefined) {
      booleanExpressions.push(
        sql`u_id = ${queryString.u_id}
      `);
      //filter for project...
    }
    console.log(queryString);
    if (queryString.p_id !== undefined) {
      booleanExpressions.push(
        sql`p_id = ${queryString.p_id}
      `);
    }
    if (queryString.ss_id!== undefined) {
      booleanExpressions.push(
        sql`ss_id = ${queryString.ss_id}
      `);
    }
  }
  console.log('218');
  // console.log(`SELECT * FROM samples WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  const {rows} =  await query(
    sql`SELECT * FROM samples WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const getBoxSamples = async (req, res) => {
  const queryString = JSON.parse(req.query.filter);

  const {rows} =  await query(
  sql`SELECT * FROM samples
  WHERE substring(loc,3,2) in (SELECT SUBSTRING(loc, 3, 2) AS ExtractString
  FROM samples WHERE p_id = ${queryString.p_id}) AND ss_id = 1`);

  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const putSamples = async (req, res) => {
  console.log('PUTSAMPLE CALLED');

  const update = req.body;
  console.log(update.ids);
  const columns = [];

  if (update.ss_id !== undefined) {
    columns.push(
      sql`ss_id = ${update.ss_id}
    `)
  }

  if (update.p_id !== undefined) {
    columns.push(
      sql`p_id = ${update.p_id}
    `)
  }
  const columnsj = sql.join(columns,sql` , `)
  console.log('cols', columns);
  const condition = sql`id = ANY(${sql.array(update.ids, 'int4')})`
  console.log(sql`UPDATE samples SET ${columnsj} WHERE ${condition};`);
  const {rows} =  await query(
    sql`UPDATE samples SET ${columnsj} WHERE ${condition};`);
  res.send(rows);
}

//POST SAMPLES
const postSamples = async (req, res) => {
  console.log('POSTSAMPLES CALLED');

  const inserts=(sql.unnest(req.body,['text','int4','int4','int4', 'text']));
  console.log(inserts);

  const {rows} =  await query(
     sql`INSERT INTO samples (sa_name, u_id, ss_id, p_id, loc)
     SELECT * FROM ${inserts}`);
     res.send(rows);
  console.log(rows);
}

const getSampleStore = async (req, res) => {
  const filter = JSON.parse(req.query.filter).myCustomAttr;
  let ids = JSON.parse(req.query.filter).ids;

  if (ids.length > 0 ) {
    let idVals = [];
    for (const i of ids){
      idVals.push(
            sql`${i}`)
    }
    const ids_filter = sql.join(idVals,sql` , `);
    console.log(sql`SELECT * FROM get_avail_store(${filter}) WHERE id IN (${ids_filter})`);

    const {rows} =  await query(
      sql`SELECT * FROM get_avail_store(${filter}) WHERE id IN (${ids_filter})`);
    res.send(rows);
  }
  else {
      const {rows} =  await query(
        sql`SELECT * FROM get_avail_store(${filter})`);
      res.send(rows);
  }
}

const deleteSampleRows = async (req, res) => {
  console.log('DELETE SAMPLE ROWS');
  console.log(req.query);
  const filter = JSON.parse(req.query.filter).id;

  if (filter.length > 0 ) {
    let idVals = [];
    for (const i of filter){
      idVals.push(
            sql`${i}`)
    }
  const ids_filter = sql.join(idVals,sql` , `);
  // console.log(`DELETE FROM samples WHERE id IN (${idVals})`);
  const {rows} =  await query(
        sql`DELETE FROM samples WHERE id IN (${ids_filter})`);
  console.log(rows);
  res.send(rows);
  };
};


  // const filter = JSON.parse(req.query.filter).myCustomAttr;
  // let ids = JSON.parse(req.query.filter).ids;
  //
  // if (ids.length > 0 ) {
  //   let idVals = [];
  //   for (const i of ids){
  //     idVals.push(
  //           sql`${i}`)
  //   }
  //   const ids_filter = sql.join(idVals,sql` , `);
  //   console.log(sql`SELECT * FROM get_avail_store(${filter}) WHERE id IN (${ids_filter})`);
  //
  //   const {rows} =  await query(
  //     sql`SELECT * FROM get_avail_store(${filter}) WHERE id IN (${ids_filter})`);
  //   res.send(rows);
  // }
  // else {
  //     const {rows} =  await query(
  //       sql`SELECT * FROM get_avail_store(${filter})`);
  //     res.send(rows);
  // }


 export {getSamples, deleteSampleRows, getBoxSamples, getSStatus, getUsers, postUser,
         postLogin, getProjects, putSamples, getSample, postSamples, getSampleStore, postProject};
