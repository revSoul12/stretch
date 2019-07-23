const value = process.argv.slice(2);

let reverse = function(arg) {
  
  arg.forEach(function(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
  })
}

reverse(value);

