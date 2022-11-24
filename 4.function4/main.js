function countWords(message){
    return message.replace(/[.,]/g,"").valueOf().split(" ").length;

}
countWords('Good morning, I love JavaScript.'); // should return 5