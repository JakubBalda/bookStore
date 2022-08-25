const config = require('../config');
const util = require('util'); 

function startTask(taskName){
    if(config.logsEnabled && config.debugLogsEnabled)
        console.log('Starting task: ' + taskName);
}

function endTask(taskName){
    if(config.logsEnabled && config.debugLogsEnabled)
        console.log('Ending task: ' + taskName);
}

function logData(data){
    if(config.logsEnabled && config.dataLogsEnabled)
        console.log('Sended data: ' + data);
}

function logInformation(message){
    if(config.logsEnabled && config.auditLogsEnabled)
        console.log(message);
}

function logRequest(request){
    if(config.logsEnabled && config.debugLogsEnabled)
        console.log('Incoming request: ' + util.inspect(request, false, null, true));
}

module.exports = {startTask, endTask, logData, logInformation, logRequest};