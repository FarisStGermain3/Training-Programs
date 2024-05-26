function generateHashtag (str) {
 
    if (str.length == 0) return false;
    
    
    for(let i = 0; i < str.length; i++)
      {
        if (str[i] != " ") break;
        if (str[i] == " " && i + 1 == str.length) return false;
      }
    
    
    
    //splitting the string into tokens
    
    let strTok = str.split(" ");
    for (i = 0; i < strTok.length; i++)
      {
        if (strTok[i].length > 139) return false
        strTok[i] = strTok[i].charAt(0).toUpperCase() + strTok[i].slice(1);
      }
    
    strTok = strTok.join("");
    
    //checking if the first character was indeed a Hashtag
    if (strTok[0] != "#")
      {
        strTok = "#" + strTok;
      }
    
    
    return strTok;
  }