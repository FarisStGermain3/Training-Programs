function toCamelCase(str){
for (let i = 0; i < str.length; i++){
  if(str.charCodeAt(i) == 45 || str.charCodeAt(i) == 95){
  str = str.split("");
  str[i] = "";
  str[i + 1] = str[i + 1].toUpperCase();
  str = str.join("");
    console.log(str);
  }
}

return(str);
}
