let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text) {  // create speak function
    let text_speak = new SpeechSynthesisUtterance(text)  // create an object
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {   // create function named 'wishMe'
    let day = new Date()  // create date object
    let hours = day.getHours()
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        speak("Good Monrning Sir")
    } else if (hours >= 12 && hours <= 16) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}

window.addEventListener('load', () => {
    // wishMe() // call the function
})

btn.addEventListener("click", () => {
    recognition.start()  // 'start' is a recognition function that recognise the voice
    btn.style.display = "none"
    voice.style.display = "block"
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition  // variable to store the voice as a text
let recognition = new speechRecognition()  // create new obeject of your voice text

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex   // variable to store the resultIndex value
    let transcript = event.results[currentIndex][0].transcript // variable to store voice data

    content.innerText = transcript  // add voice text to your content
    // console.log(event) // print voice text in object

    takeCommond(transcript.toLowerCase())
}

function takeCommond(message) {
    btn.style.display = "block"
    voice.style.display = "none"

    if (message.includes("hello") || message.includes("hey") || message.includes("hii")) {   // this is a include method
        speak("hello sir, what can i help you ?")
    } else if (message.includes("who are you")) {
        speak("I am your virtual assistant , created by VEER Sir")
    } else if (message.includes("open youtube")) {
        speak("opening youtube....")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speak("opening google....")
        window.open("https://www.google.com/", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook....")
        window.open("https://www.facebook.com/", "_blank")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp....")
        window.open("https://www.whatsapp.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram....")
        window.open("https://www.instagram.com/", "_blank")
    }
    else if (message.includes("open calculater")) {
        speak("opening calculater....")
        window.open("calculater://", "_blank")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp....")
        window.open("whatspp://", "_blank")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        speak(`this is what i found on internet recording ${message.replace("shifra", "") || message.replace("shipra", "")}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}






