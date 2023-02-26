/* Declare a função 'home1' */
function home1(){
    //criando variaveis do tipo scring 
    var bot_home = document.getElementById("mobile_home");
    //criando variaveis do tipo scring 
    var mobileHeader1 = document.getElementById("mobile_header1");
    //criando variaveis do tipo scring 
    var mobileHeader2 = document.getElementById("mobile_header2");

    //atribuindo um estilo usando DOM (Document Object Model)
    bot_home.style.display = "inline-block";
    //atribuindo um estilo usando DOM (Document Object Model)
    mobileHeader1.style.display = "none";
    //atribuindo um estilo usando DOM (Document Object Model)
    mobileHeader2.style.display = "inline-block";
} 

/* Declare a função 'home2' */
function home2(){
    //criando variaveis do tipo scring
    var bot_home = document.getElementById("mobile_home");
    //criando variaveis do tipo scring
    var mobileHeader1 = document.getElementById("mobile_header1");
    //criando variaveis do tipo scring
    var mobileHeader2 = document.getElementById("mobile_header2");

    bot_home.style.display = "none";
    //atribuindo um estilo usando DOM (Document Object Model)
    mobileHeader1.style.display = "inline-block";
    //atribuindo um estilo usando DOM (Document Object Model)
    mobileHeader2.style.display = "none";
} 