let vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

function filterStr(str){
  return str.split('')
    .filter( char=>vowels.includes(char.toLowerCase()) )
    .join('');
}

console.log(filterStr('тестовая СТРОКА'));