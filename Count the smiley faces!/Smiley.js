//return the total number of smiling faces in the array
function countSmileys(arr) {
  arr = arr.join(" ");
  console.log(arr)
  let smileyCount = 0;
  for (let i = 0; i < arr.length; i++)
    {
      
      if(arr[i] == ":" || arr[i] == ";")
        {
          if(arr[i+1] == "D" || arr[i+1] == ")")
            {
              smileyCount++;
              
            }
        } 
      
      if(arr[i] == ":" || arr[i] == ";")
        {
          if(arr[i+1] == "-" || arr[i+1] == "~")
            {
              if(arr[i+2] == "D" || arr[i+2] == ")")
            {
              smileyCount++;
              
            }
              
            }
        } 
    }
  return smileyCount;
}
