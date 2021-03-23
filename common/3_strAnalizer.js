function isHtml(path){
  return path.split('.').pop() === 'html'
}

let str = "/users/download/index.html";
let str2 = 'fdslfjakfj;sadjf';

console.log(isHtml(str));
console.log(isHtml(str2));