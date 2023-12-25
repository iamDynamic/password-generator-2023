var Password = document.getElementById("arc")
var submit = document.getElementById("submit")
var span = document.getElementById("span1")
var p = document.getElementById("p")
var arc = document.querySelector("article")
p.addEventListener("click",()=>{
    span.classList.add("show") 
      span.classList.remove("hide") 
      p.addEventListener("click",()=>{
         location.reload()
      })
})

submit.addEventListener("click",()=>{
    var Password = [
        "E232312POP",
        "YAM323NSAR",
        "HIDBDJD212",
        "2ID123209F",
        "VIVAVOCCIF",
        "74J9EVR07I",
        "J2N5ZS35IL",
        "12M5QJ2XS3",
        "99Y1W85AQK",
        "TF77UT39QN",
        "O24AY5RVB1",
        "310Z0AKYWW",
        "RmnA7nojFi",
        "V0IGRAL8KQ",
        "2GIWcpvWfk",
        "qN9P0r4Lwh",
        "azQYVaKyYt",
        "BFe5lMSVAg",
        "8AyI6hIAhK",
        "6Iww3RTDyL",
        "bzez3DJXlY",
        "X7Y10ENIkx",
        "J3sMqdAD2V",
        "N0XboLDU7F",
        "iQkKZNjpTf",
        "6gf89h3X4f",
        "rk3cEqp1XF",
        "i1a0ItwEsl",
        "uMkE4FXPYK",
        "xEFoatyLnK",
        "0aJznPSj6Z",
        "DDg2kCkFBx",
        "gNP9H0Ld04",
        "pK9faF8m4P",
        "fybLL1bBkX",
        "TLF8p71Xt3",
        "RRDDHCHXC4",
        "VIVDKXGX21",
        "HDHUBDDSAS",
        "DSADSDDASD",
        "ewdwSAS232",
        "dddEEE3233",
        "232dassdss",
        "909909popx",
        "popxbobxxd",
        "xxdddxxxd2",
        "evralol313",
        "evak132133",
        "srccpy2023",
        "babalhara2",
        "boooba202 3",
        "2023202327",
        "d2dw32wxbb",
        "ewe2023343",
        "38938errwe",
        "werewwefrw",
        "alisahekp7",
        "p1P3p3P4p5",
        "abo5aleb32",
        "abo5aleb23",
        "abo5a33213",
        "aba3dsddc2",
        "o5a3vvvdw1",
    ]
    function randomStringInArray(Password) {
        const randomIndex = Math.floor(Math.random() * Password.length);
        return Password[randomIndex];
      }
      
      // Example usage:      
      const randomString = randomStringInArray(Password);
      
      console.log(randomString); // Outputs one of the three strings randomly
      arc.innerHTML = `${randomString}`
    
})