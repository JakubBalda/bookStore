// start task, end task, log data

function startTask(taskName){
    console.log('Starting task: ' + taskName);
}

function endTask(taskName){
    console.log('Ending task: ' + taskName);
}

function logData(data){
    console.log('Sended data: ' + data);
}

module.exports = {startTask, endTask, logData};