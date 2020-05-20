import {createPool, sql} from 'slonik';
var querystring = require('querystring')
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

// {id: 8, sa_name: "sample8", u_id: 3, ss_id: 1, p_id: 1, …}

// date_cryo: 1577836800000
// date_exp: "2020-01-31"
// id: 8
// loc: "000008"
// p_id: 1
// sa_name: "sample8"
// ss_id: 1
// u_id: 3

const putSample = async (req, res) => {
  console.log('PUTSAMPLE called');

  const update = JSON.parse(req.body);
  const booleanExpressions = [];

  if (update.id !== undefined) {
    const condition = sql`id = ANY(${sql.array(update.id, 'int4')})`;
  }

  if (update.sa_name !== undefined) {
    booleanExpressions.push(
      sql`sa_name = ${update.sa_name}`);
  }

  const {rows} =  await query(
    sql`UPDATE samples SET ${sql.join(booleanExpressions,sql` , `)} WHERE ${condition};)`);
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Range",'bytes:0-9/9');
  res.send(rows);
}

 export {getSamples, getSStatus, getUsers, getProjects, putSample, getSample};
