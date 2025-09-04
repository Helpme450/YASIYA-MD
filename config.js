const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ME4T0DLB#TLJmZ2Up96TUaOSWsfia5yW5jr3T_mmdPRoJY2qYXow'
};
