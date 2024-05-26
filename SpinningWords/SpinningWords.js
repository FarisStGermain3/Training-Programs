function spinWords(string){
  //TODO Have fun :)
  let array = string.split(" ");
  for (let i = 0; i < array.length; i++)
    {
      if (array[i].length > 4){
        array[i] = array[i].split("");
        array[i] = array[i].reverse();
        array[i] = array[i].join("");
        console.log(array[i]);
      }
      console.log(array.join(" "));
    }
  return array.join(" ");
}
