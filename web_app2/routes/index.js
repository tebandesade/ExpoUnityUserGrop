var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const findDocumentss = function(db, callback) {
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
  const collection = db.collection('proyectos');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}




function getConsultaa(callback){
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
console.log('GET ADMINS')
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
  collection.find({correo:q.correo,pass:q.pass},{fields:{_id:0}}).toArray(function(err, docs) {
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
console.log('WHERE is q: ',q.correo);
console.log(typeof(q))
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

const findProyectos = function(db, q, callback) {
  // Get the documents collection
  const collection = db.collection('proyectos');
  // Find some documents
console.log('query  test: ',q);
  collection.find({"expoid": parseInt(q.expoid)}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs)
    callback(docs);
  });
}

function getProyectos(q, callback){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'unityusergroup';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findProyectos(db, q, (data)=> {
  callback(data);
   client.close(); 
  });
 
});
}

/* GET home page. */
router.get('/aplicaciones', function(req, res, next) {

  getAdmins((data)=>
    console.log("dadadada: ", data)
  )
 
});


/* GET home page. */
router.get('/testGet', function(req, res, next) {

	getAdmins((data)=>
 		res.render('index', { title: data })
	)
 
});

/* GET participantes page. */
router.get('/participantes', function(req, res) {
res.setHeader('Content-Type', 'application/json')
  getParticipantes(req.query, (data)=>{
    console.log('last ccallback ', data)
    res.send(data)
  })
 
});

/* GET proyectos page. */
router.get('/proyectos', function(req, res) {
  console.log("LOOKING FOR PROYECTOS");
res.setHeader('Content-Type', 'application/json')

  getProyectos(req.query, (data)=>{
    res.send(data)
  })
 
});

const findDocuments = function(db, callback) {
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
  callback(data);
   client.close(); 
  });
 
});
}




/* GET home page. */
router.get('/getData', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
getConsulta((data) => 
  res.send(data));
});




module.exports = router;
