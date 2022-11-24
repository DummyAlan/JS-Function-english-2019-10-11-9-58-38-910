function palindrome(message){
    var str = "";
    for (var i = message.length - 1 ; i >= 0; i--){
        str += message.charAt(i);
    }
    if (str == message){
        return true;
    }
    else{
        return false;
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true