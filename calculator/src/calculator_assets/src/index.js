import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as calculator_idl, canisterId as calculator_id } from 'dfx-generated/calculator';

const agent = new HttpAgent();
const calculator = Actor.createActor(calculator_idl, { agent, canisterId: calculator_id });

// document.getElementById("clickMeBtn").addEventListener("click", async () => {
//   const firstNumber = document.getElementById('fnumber').value
//   const greeting = await calculator.add(4);

//   document.getElementById("greeting").innerText = greeting;
// });


document.getElementById("clickMeBtn").addEventListener("click", async () => {
  document.getElementById("clickMeBtn").innerText="Fetching..."
  const firstNumber = document.getElementById('fnumber').value
  const secondNumber = document.getElementById('lnumber').value
  var ele = document.getElementsByName('operation'); 
  let greeting;
  for(let i = 0; i < ele.length; i++) {
      if(ele[i].checked){
        if (ele[i].value === 'Add'){
          greeting = await calculator.add(parseInt(firstNumber),parseInt(secondNumber));
        }else if (ele[i].value === 'Sub'){
          greeting = await calculator.sub(parseInt(firstNumber),parseInt(secondNumber));
        }else {
          greeting = await calculator.get();
        }
        document.getElementById("clickMeBtn").innerText="Get Result"
      }
  }
  document.getElementById("greeting").innerText = greeting;
});