function longest(s1, s2) {
  // your code
  let fullString = s1 + s2;
  let sortedString;
  fullString = fullString.split("");
  for (let i = 0; i < fullString.length; i++)
    {
      for (let j = i + 1; j < fullString.length;j++)
        {
          if (fullString[i] == fullString[j])
            {
              fullString[j] = "";
            }
        }
    
      sortedString = fullString.sort();
      sortedString = sortedString.join("");
      
    }
  return(sortedString);
}
