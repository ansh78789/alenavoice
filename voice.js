// let btn=document.querySelector("#btn")
// let content=document.querySelector("#content")
// let voice=document.querySelector("#voice")
// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1
//     text_speak.lang="hi-GB"
//     window.speechSynthesis.speak(text_speak)
// }
// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours<12){
//         speak("Good Morning Sir")
//     }
//     else if(hours>=12 && hours <16){
//         speak("Good afternoon Sir")
//     }else{
//         speak("Good Evening Sir")
//     }
// }
//  window.addEventListener('load',()=>{
//      wishMe()
//  })
// let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
// let recognition =new speechRecognition()
// recognition.onresult=(event)=>{
//     let currentIndex=event.resultIndex
//     let transcript=event.results[currentIndex][0].transcript
//     content.innerText=transcript
//    takeCommand(transcript.toLowerCase())
// }

// btn.addEventListener("click",()=>{
//     recognition.start()
//     voice.style.display="block"
//     btn.style.display="none"
// })
// function takeCommand(message){
//    voice.style.display="none"
//     btn.style.display="flex"
//     if(message.includes("hello")||message.includes("hey")){
//         speak("hello sir,what can i help you?")
//     }
//     else if(message.includes("who are you")){
//         speak("i am virtual assistant ,created by Ansh Sir")
//     }else if(message.includes("open youtube")){
//         speak("opening youtube...")
//         window.open("https://youtube.com/","_blank")
//     }
//     else if(message.includes("open google")){
//         speak("opening google...")
//         window.open("https://google.com/","_blank")
//     }
//     else if(message.includes("open facebook")){
//         speak("opening facebook...")
//         window.open("https://facebook.com/","_blank")
//     }
//     else if(message.includes("open github")){
//         speak("opening github...")
//         window.open("https://github.com/","_blank")
//     }
//     else if(message.includes("open chatgpt")){
//         speak("opening chatgpt...")
//         window.open("https://chatgpt.com/","_blank")
//     }
//     else if(message.includes("open instagram")){
//         speak("opening instagram...")
//         window.open("https://instagram.com/","_blank")
//     }

//     else if(message.includes("open spotify")){
//         speak("opening spotify...")
//         window.open("https://open.spotify.com/","_blank")
//     }

//     else if(message.includes("open calculator")){
//         speak("opening calculator..")
//         window.open("https://in.search.crome.com/search?fr=mcafee&type=E211IN826G91738&p=calculator")
//     }
//     else if(message.includes("open whatsapp")){
//         speak("opening whatsapp..")
//         window.open("whatsapp://")
//     }
//     else if(message.includes("time")){
//       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//       speak(time)
//     }   
//     else if(message.includes("date")){
//         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
//         speak(date)
//       }
//     else{
//         let finalText="this is what i found on internet regarding" + message.replace("arena","") || message.replace("arena","")
//         speak(finalText)
//         window.open(`https://www.google.com/search?q=${message.replace("arena","")}`,"_blank")
//     }
// }


let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Audio element for music playback
const audio = new Audio();
audio.src = ""; // Default source is empty. Can be dynamically set.
audio.volume = 0.5; // Set initial volume to 50%.

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener("load", () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Ansh Sir.");
    } else if (message.includes("play this song")) {
        speak("Playing your song.");
        audio.src = "https://youtu.be/ZQkUYmaVwgs"; 
        audio.play();
    } else if (message.includes("increase volume")) {
        if (audio.volume < 1) {
            audio.volume = Math.min(1, audio.volume + 0.1);
            speak("Volume increased.");
        } else {
            speak("Volume is already at maximum.");
        }
    } else if (message.includes("decrease volume")) {
        if (audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - 0.1);
            speak("Volume decreased.");
        } else {
            speak("Volume is already at minimum.");
        }
    } else if(message.includes("open calculator")){
                speak("opening calculator..")
                window.open("https://www.online-calculator.com/")
    } else if(message.includes("open chatgpt")){
                speak("opening chatgpt...")
                window.open("https://chatgpt.com/","_blank")
    }else if (message.includes("stop music")) {
        audio.pause();
        speak("Music stopped.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open github")) {
        speak("Opening GitHub...");
        window.open("https://github.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, {
            hour: "numeric",
            minute: "numeric",
        });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, {
            day: "numeric",
            month: "short",
        });
        speak(`Today's date is ${date}`);
    } else {
        let finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}
