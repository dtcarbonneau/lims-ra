const path = require ('path');
const express = require('express');
const bodyParser = require('body-parser');
const Router = require('express-promise-router');
const cors = require('cors');
import {getSamples, getUsers, getProjects, getSStatus, putSamples, getSample,
        postProject, postSamples, getSampleStore, getBoxSamples, postUser, postLogin, deleteRows} from './queries'

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
  });

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/samples',getSamples)
app.get('/api/users', getUsers)
app.post('/api/users',postUser)
app.get('/api/projects',getProjects)
app.get('/api/s_status',getSStatus)
app.put('/api/samples', putSamples)
app.post('/api/samples', postSamples)
app.post('/api/projects', postProject)
app.get('/api/get_avail_store', getSampleStore)
app.post('/api/login', postLogin)
app.get('/api/boxsamples', getBoxSamples)
app.delete('/api/delete', deleteRows)
// app.get('/api/samples', getSample)

/*router.get('/', (req, res) => {
   var p_name = req.query;
   // console.log("api", Object.values(p_name));
   Samples.retrieveAll(p_name, (err, samples) => {
     // console.log("Result", res);
     if (err)
       return res.json(err);
     return res.json(samples)
   });

 });

 router.put('/', (req, res) => {
   let id = req.body.id;
   let action = req.body.action;

   Samples.update(id, action, (err, result) => {
     if (err)
       return res.json(err);
     return res.json(result);
   });
 });

// router.post('/', (req, res) => {
//   var p_name = req.body.p_name;
//   var t_name = req.body.t_name;
//   var inv_date = req.body.inv_date;
//   var samp_type = req.body.samp_type;
//   var sto_terms = req.body.sto_terms;
//
//   Projects.insert(p_name, t_name, samp_type, inv_date, sto_terms, (err, result) => {
//     if (err)
//       return res.json(err);
//     return res.json(result);
//   });
// });

//module.exports = router;

//exports.poo_s = pool_s

//module.exports = app;*/
