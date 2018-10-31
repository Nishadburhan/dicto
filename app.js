// Branch :mycode
const express = require('express');
const os = require('os');
const ifaces = os.networkInterfaces();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Get Local iPv4
const port = 8000;
let gAddress;
Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }
        gAddress = iface.address;

        //   console.log(iface.address);

        //   if (alias >= 1) {
        //     // this single interface has multiple ipv4 addresses
        //     console.log(ifname + ':' + alias, iface.address);
        //     port=iface.address;
        //   } else {
        //     // this interface has only one ipv4 adress
        //     console.log(ifname, iface.address);
        //     port=iface.address;
        //   }
        //   ++alias;
    });
});

// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true });

// onConnect
mongoose.connection.on('connected', () => {
    console.log(`Connected to database : ${config.database}`);

});

mongoose.connection.on('error', (err) => {
    console.log(`Connection Error : ${config.database}`);
})
// App instance
const app = express();

// Routes
const users = require('./routes/users');
const words = require('./routes/words');
const suggestions = require('./routes/suggestions');
const discussion = require('./routes/discussion');
// Port Number

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
// sim

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)

app.use('/users', users);
app.use('/api', words);
app.use('/api', suggestions);
app.use('/api', discussion);
// Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint!');
});

// Init Server
// app.listen(port, "192.168.0.5",() => {
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});