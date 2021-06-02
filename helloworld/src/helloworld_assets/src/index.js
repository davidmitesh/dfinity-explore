import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as helloworld_idl, canisterId as helloworld_id } from 'dfx-generated/helloworld';

const agent = new HttpAgent();
const helloworld = Actor.createActor(helloworld_idl, { agent, canisterId: helloworld_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await helloworld.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
