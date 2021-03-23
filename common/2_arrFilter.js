const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

function getWorthyWorkers(workers){
  return workers.filter(worker=>worker.salary>1000);
}

console.log(getWorthyWorkers(workers));