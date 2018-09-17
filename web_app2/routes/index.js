var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('consulta');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}

const findAdmins = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('admins');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}


const findProyectos = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('proyectos');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}

function getConsulta(callback){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'unityusergroup';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findDocuments(db, (data)=> {
  client.close();
  callback(data);
   client.close(); 
  });
 
});
}

function getAdmins(callback){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'unityusergroup';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findAdmins(db, (data)=> {
  callback(data);
   client.close(); 
  });
 
});
}

const findParticipantes = function(db,q, callback) {
  // Get the documents collection
  const collection = db.collection('participantes');
  // Find some documents
console.log('query  test: ',q);
  collection.find({q}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}


function getParticipantes(q, callback){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'unityusergroup';
console.log('WHERE is q: ',q);
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findParticipantes(db, q, (data)=> {
  callback(data);
   client.close(); 
  });
 
});
}

function getProyectos(callback){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'unityusergroup';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findProyectos(db, (data)=> {
  client.close();
  callback(data);
   client.close(); 
  });
 
});
}




/* GET home page. */
router.get('/testGet', function(req, res, next) {

	getAdmins((data)=>
 		res.render('index', { title: data })
	)
 
});

/* GET participantes page. */
router.get('/participantes', function(req, res) {

  getParticipantes(req.query, (data)=>
    res.send(data)
  )
 
});

module.exports = router;
