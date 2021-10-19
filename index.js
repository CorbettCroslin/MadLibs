function createParagraph(){
    
    var word1 = document.getElementById('word1').value
    var word2 = document.getElementById('word2').value
    var word3 = document.getElementById('word3').value
    var word4 = document.getElementById('word4').value
    var word5 = document.getElementById('word5').value
    var word6 = document.getElementById('word6').value
    var word7 = document.getElementById('word7').value
    var word8 = document.getElementById('word8').value
    
    
    var paragraph = 
    "<p>Today, every student has a computer small enough to fit into his " + word1 +". He can solve any math problem by simply pushing the computer's little " + word2 +". Computers can add, multiply, divide, and " + word3 + ". They can also " + word4 + " better than human. Some computer are " + word5 +". Others have a/an " + word6 + " screen that shows all kinds of " + word7 + " and " + word8 + " figures.</p>"

    document.getElementById('answer').innerHTML = paragraph;

}



























