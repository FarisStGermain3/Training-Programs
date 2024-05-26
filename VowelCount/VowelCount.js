function getCount(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  
  for(let i = 0; i < str.length; i++)
    {
      for (let j = 0; j < vowels.length; j++)
        {
          if (str[i] == vowels[j]){vowelCount++}
        }
    }
  
  return vowelCount;
}
