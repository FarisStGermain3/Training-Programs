function likes(names) {
  // TODO
  
  let answer = "";
  if (names.length == 0)
    {
      return ("no one likes this");
    }
  
  if(names.length == 1)
    {
      answer = names[0] + " likes this";
      return (answer);
    }
  
  if(names.length == 2)
    {
      answer = names[0] + " and " + names[1] + " like this";
      return (answer);
    }
  
  if(names.length == 3)
    {
      let others = 0;
      others = names.length - 1;
      answer = names[0] + ", " + names[1] + " and " + names[2] + " like this";
      return answer;
    }
  
  if(names.length >= 4)
    {
      let others = 0;
      others = names.length - 2;
      answer = names[0] + ", " + names[1] + " and " + others + " others like this";
      return answer;
    }
}
