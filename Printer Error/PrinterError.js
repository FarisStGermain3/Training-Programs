function printerError(string) {
    // your code
  let errorLetters = "nopqrstuvwxyzNOPQRSTUVXYZ"
  let errorCount = 0;
  
  for(let i = 0; i < string.length; i++)
    {
      for(let j = 0; j < errorLetters.length; j++)
        {
          if (string[i] == errorLetters[j]){errorCount++};
        }
    }
  
  return errorCount+"/"+string.length;
  
}
