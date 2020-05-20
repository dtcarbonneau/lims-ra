const path = require ('path');
const express = require('express');
const bodyParser = require('body-parser');
const Router = require('express-promise-router');
const cors = require('cors');
<<<<<<< HEAD
import {getSamples, getUsers, getProjects, getSStatus, putSample, getSample} from './queries'  
=======
import {getSamples, getUsers, getProjects, updateSamples} from './queries'
>>>>>>> e85842b47436df91ac01dee63ac288b3256deae9

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

app.get('/api/samples',getSamples)
app.put('/api/samples',updateSamples)
app.get('/api/users',getUsers)
app.get('/api/projects',getProjects)
app.get('/api/s_status',getSStatus)
app.put('/api/samples', putSample)
app.get('/api/samples/:id', getSample)

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
