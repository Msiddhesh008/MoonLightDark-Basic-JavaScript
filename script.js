var btn = document.querySelector('button');
var numOfDigits = document.getElementById('numberOfDigits');
var odd_num = document.getElementById('odd');
var even_num = document.getElementById('even');
var rev_num = document.getElementById('rev');
var pal_num = document.getElementById('pallindrome');
var prime_num = document.getElementById('pri');
var arm_num = document.getElementById('Armstrong');
var entered_number = document.getElementById('numberEntered');
var fact_num = document.getElementById('factorial');
const audio = new Audio();
audio.src = "sounds/tick.wav";


function validation() {
    var x = document.getElementById('search').value;
    if (x == "") {
      alert("Fields cant be empty.");
    }
}

function NumberOfDigits(nod){
   var digit=0;
   while(nod > 0){
       nod = parseInt(nod/10);
       digit++;
   }
   numOfDigits.innerHTML = digit;
}

function OddEvenNumber(num) {
    var odd = 0, even = 0;

while(num > 0)
{
    if(num % 2 == 0)
    {
        even++;
    }else{
        odd++;
    }
    num = parseInt(num/10);
}
odd_num.innerHTML=odd;
even_num.innerHTML=even;
}

function ReversePalindromeNumber(num){
    var rem = 0, rev = 0;

    while(num > 0){
        rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num / 10);
    }

    pal = num;

    if (pal === rev) {
        pal_num.innerHTML = "Yes";
    }else{
        pal_num.innerHTML = "No";
    }

    
    rev_num.innerHTML=rev;
}

function PrimeNumber(prime){
    var flag=0,remm, div;

    for(div=2; div <= prime/2; div++){
        remm=prime%div;
        if(remm===0){
            flag=1;
            break;
            }
        }

        if(flag===0){
            prime_num.innerHTML="Yes";
        }else{
            prime_num.innerHTML="No"
        }
}

function CounterAnimation(number){
    let num_enter = number
    let interval = 1000;
    let startValue = 0;
    var endValue = num_enter;

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=1;
        entered_number.textContent = startValue;

        if(startValue===endValue){
            clearInterval(counter);
        }
    },duration);
}

// ===[ Button Click Listener]===
btn.onclick = function(){    
    var number = parseInt(document.getElementById('search').value);

    audio.play();
    validation();
    
    NumberOfDigits(number);
    OddEvenNumber(number);
    ReversePalindromeNumber(number);
    PrimeNumber(number);
    CounterAnimation(number);
};








































// ===[ KeyStroke Listner ]===
var input = document.getElementById("search");

input.addEventListener('keydown', function(event) {
    if(event.key == "Enter") {    
        var number = parseInt(document.getElementById('search').value);
    
        audio.play();
        validation();
    
        NumberOfDigits(number);
        OddEvenNumber(number);
        ReversePalindromeNumber(number);
        PrimeNumber(number);
        CounterAnimation(number);
    }
});
