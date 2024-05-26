function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let smallestNum = 0;  
  let i = 0;
  let j = 0;
  let min = numbers[0];
  let min2 = numbers[1];
  let buffer = 0;
  
  for(i=0; i < numbers.length;i++)
    {
      for(j=0; j < numbers.length;j++)
        {
          if(numbers[j] > numbers[i])
            {
              buffer = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = buffer;
            }
        }
    }
  
  return (numbers[0] + numbers[1]);
}
