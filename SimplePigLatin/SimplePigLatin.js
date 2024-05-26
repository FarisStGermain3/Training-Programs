function pigIt(str){
   let letterBuffer;
   let lastLetterBuffer;
   let splits = str.split(" ");
   console.log(splits);
    
   for(let i = 0; i < splits.length; i++)
     {
       if (splits[i] == "!" || splits[i] == "?" || splits[i] == ".") 
         {
           i++;
           break;
         }
       buffSplits = splits[i];
       
       buffSplits = buffSplits.split("");
       letterBuffer = buffSplits[0];
       lastLetterBuffer = buffSplits[buffSplits.length]
       buffSplits[0] = lastLetterBuffer;
       buffSplits[buffSplits.length] = letterBuffer;
       buffSplits = buffSplits.join("");
       splits[i] = buffSplits + "ay";
       
     }
  
  console.log(splits.join(" "));
  return(splits.join(" "));
}
