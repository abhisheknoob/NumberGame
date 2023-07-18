let ComputerNumber;
let UserGuess=[];
let emptyInput=document.getElementById('InputBox')
const NEWbutton=document.querySelector('.newGameButton')


const init=()=>{
    ComputerNumber=Math.floor(Math.random()*100)
    // console.log(ComputerNumber)
 document.querySelector('.newGameButton').style.display='none'
    document.querySelector('#GameArea').style.display='none'
}
const startGame=()=>{
    document.querySelector('#welcomeScreen').style.display='none'
    document.querySelector('#GameArea').style.display='block'
}
const CompareGuess=()=>{
    const userNumber=document.getElementById('InputBox').value 
    UserGuess=[ ...UserGuess, userNumber]
    document.querySelector('.guess').innerHTML=UserGuess

    // check the value high or low
    const result=document.getElementById('textOutput')
   const startNewGame=()=>{
    document.querySelector('.newGameButton').style.display='block'
    emptyInput.setAttribute('disabled' ,true)
   }
 
   if(UserGuess.length<maxvalue) {   
        if(userNumber>ComputerNumber){
          result.innerHTML='your guess is  high😮'
          emptyInput.value=''
    }else if(userNumber==ComputerNumber){
        result.innerHTML='you won 😘'
        emptyInput.value=''
        startNewGame();
       
    }else{
        result.innerHTML='your guess is low 😒'
        emptyInput.value=''
    }}else{
        if(userNumber>ComputerNumber){
            result.innerHTML=`you loose, correct num is ${ComputerNumber}`
            emptyInput.value=''
            startNewGame();
      }else if(userNumber==ComputerNumber){
          result.innerHTML="you won😍"
          emptyInput.value=''
          startNewGame();
      }else{
          result.innerHTML=`you loose, correct num is ${ComputerNumber}`
          emptyInput.value=''
          startNewGame();
      }

    }


    // number of attempts
    const previousAttempts=document.querySelector('.attempts')
    previousAttempts.innerHTML=UserGuess.length;


    // new game start button 
    NEWbutton.addEventListener('click',()=>{
        document.querySelector('#welcomeScreen').style.display='block'
        document.querySelector('#GameArea').style.display='none'
    
        location.reload()
    })
}



const EasyMode=()=>{
    maxvalue=10;
    startGame()
}
const HardMode=()=>{
    maxvalue=5;
    startGame()
}

