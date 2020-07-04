const path = require ('path');
const express = require('express');
const bodyParser = require('body-parser');
const Router = require('express-promise-router');
const cors = require('cors');
import {getSamples, getUsers, getProjects, getSStatus, putSamples, getSample,
        postProject, postSamples, getSampleStore, getBoxSamples, putUsers, putProjects, postUser, postLogin, deleteSampleRows, getFreezers} from './queries'

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
app.put('/api/users', putUsers)
app.put('/api/projects', putProjects)
app.post('/api/samples', postSamples)
app.post('/api/projects', postProject)
app.get('/api/get_avail_store', getSampleStore)
app.post('/api/login', postLogin)
app.get('/api/boxsamples', getBoxSamples)
app.get('/api/freezers', getFreezers)
app.delete('/api/samples', deleteSampleRows)
