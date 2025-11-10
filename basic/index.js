// const {sum,sub}=require("./Math.js")
// console.log(sum(5,6),sub(3,2));

import abc,{sum,sub} from "./Math.js";
// console.log(abc(2,5));

// ---------------code for text to speach----------------------

// import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript

// // get audio URL
// const url = googleTTS.getAudioUrl('Hello World my name is abhishek Tripathi', {
//   lang: 'en',
//   slow: false,
//   host: 'https://translate.google.com',
// });
// console.log(url); // https://translate.google.com/translate_tts?...

//------------------------code for figlet------------------------

import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Abhishek");
  console.log(text);
}

doStuff();