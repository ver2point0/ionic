<<<<<<< HEAD
//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
=======
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.set('Content-Type', 'application/json');
  next();
});

app.get('/notes', function (req, res) {
  // Open the existing notes file
  fs.readFile(__dirname + '/data/notes.json', 'utf8', function (err, data) {

    // If we get an error, log it and return
    if (err) {
      res.status(500).end();
      return console.log(err);
    }

    res.status(200).send(data);

  });
})

// Update a note
app.put('/notes/:id', function (req, res) {
  // Open the existing notes file
  fs.readFile(__dirname + '/data/notes.json', 'utf8', function (err, data) {

    // If we get an error, log it and return
    if (err) {
      res.status(500).end();
      return console.log(err);
    }

    // Try to parse the JSON or return
    try {
      data = JSON.parse(data);
    } catch (e) {
      res.status(500).end();
      return console.log(e);
    }

    // Add body item to notes array
    data.forEach(function (note, index) {
      if (note.id == req.params.id) {
        data[index] = req.body;
      }
    });

    // Write file back to server
    fs.writeFile(__dirname + '/data/notes.json', JSON.stringify(data), function (err) {

      // If we get an error, log it and return
      if (err) {
        res.status(500).end();
        return console.log(err);
      }

      // No errors, everything is done so return new data
      res.status(200).send(data);
    });
  });
});

// Create a new note
app.post('/notes', function (req, res) {
  // Open the existing notes file
  fs.readFile(__dirname + '/data/notes.json', 'utf8', function (err, data) {

    // If we get an error, log it and return
    if (err) {
      res.status(500).end();
      return console.log(err);
    }

    // Try to parse the JSON or return
    try {
      data = JSON.parse(data);
    } catch (e) {
      res.status(500).end();
      return console.log(e);
    }

    // Add body item to notes array
    data.push(req.body);

    // Write file back to server
    fs.writeFile(__dirname + '/data/notes.json', JSON.stringify(data), function (err) {

      // If we get an error, log it and return
      if (err) {
        res.status(500).end();
        return console.log(err);
      }

      // No errors, everything is done so return new data
      res.status(201).send(data);
    });
  });
});

// Delete a note
app.delete('/notes/:id', function (req, res) {
  // Open the existing notes file
  fs.readFile(__dirname + '/data/notes.json', 'utf8', function (err, data) {

    // If we get an error, log it and return
    if (err) {
      res.status(500).end();
      return console.log(err);
    }

    // Try to parse the JSON or return
    try {
      data = JSON.parse(data);
    } catch (e) {
      res.status(500).end();
      return console.log(e);
    }

    // Add body item to notes array
    var index = -1;
    data.forEach(function (note, i) {
      if (note.id == req.params.id) {
        index = i;
      }
    });

    // If we found an item by that id, remove it
    if (index >= 0) {
      data.splice(index, 1);
    }

    // Write file back to server
    fs.writeFile(__dirname + '/data/notes.json', JSON.stringify(data), function (err) {

      // If we get an error, log it and return
      if (err) {
        res.status(500).end();
        return console.log(err);
      }

      // No errors, everything is done so return
      res.status(204).end();
    });
  });
});

app.listen(8080, function () {
  console.log('Server started. Open http://localhost:8080 in your browser.');
>>>>>>> d8b49cebb1e2146027111d3ad67b9bc4e3fe638b
});
