import {createPool, sql} from 'slonik';
var querystring = require('querystring')
//const pool = createPool('postgresql://postgres@localhost:5432/lims_ra');
const pool = createPool('postgresql://limsuser:limspw@localhost:5433/lims');

var query = (q) => pool.query(q)

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
      //filter for project...
    }
    if (queryString.p_id !== undefined) {
      booleanExpressions.push(
        sql`p_id = ${queryString.p_id}
      `);
    }
  }

  const {rows} =  await query(
    sql`SELECT * FROM samples WHERE ${sql.join(booleanExpressions,sql` AND `)}`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const putSamples = async (req, res) => {
  console.log('PUTSAMPLE CALLED');

  const update = req.body;
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

  const condition = sql`id = ANY(${sql.array(update.ids, 'int4')})`

  const {rows} =  await query(
    sql`UPDATE samples SET ${columnsj} WHERE ${condition};`);
  //res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  //res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

const postSamples = async (req, res) => {

  const sample = req.body;
  const columns = [];
  const values = [];

  console.log('sample', sample);
  if (sample.ss_id !== undefined) {
    columns.push(
      sql`ss_id`)
    values.push(
      sql`${sample.ss_id}`)
  }

  if (sample.date_cryo !== undefined) {
    columns.push(
      sql`date_cryo`)
    values.push(
      sql`${sample.date_cryo}`)
  }

  if (sample.date_exp !== undefined) {
    columns.push(
      sql`date_exp`)
    values.push(
      sql`${sample.date_exp}`)
  }

  if (sample.loc !== undefined) {
    columns.push(
      sql`loc`)
    values.push(
      sql`${sample.loc}`)
  }

  if (sample.p_id !== undefined) {
    columns.push(
      sql`p_id`)
    values.push(
// <<<<<<< HEAD
//       sql`${sample_id}`)
// =======
      sql`${sample.p_id}`)
  }

  if (sample.u_id !== undefined) {
    columns.push(
      sql`u_id`)
    values.push(
      sql`${sample.u_id}`)
  }

  const columnsj = sql.join(columns,sql` , `);

  const valuesj = sql.join(values,sql` , `);
  console.log('values', valuesj)

  console.log(sql`INSERT INTO samples (${columnsj}) VALUES (${valuesj});`);

  console.log(sql`INSERT INTO samples (${columnsj}) VALUES (${valuesj});`);

  const {rows} =  await query(
    sql`INSERT INTO samples (${columnsj}) VALUES (${valuesj});`);
  res.send(rows);
}

const getSampleStore = async (req, res) => {
  console.log('getSampleStore Called');
  const {rows} =  await query(
    sql`SELECT * from get_avail_store()`);
  res.send(rows);

}

 export {getSamples, getSStatus, getUsers, getProjects, putSamples, getSample, postSamples, getSampleStore };
