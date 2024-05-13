(()=>{

    const message = new SpeechSynthesisUtterance();

    function onVoicesChanged(){
        const voices = speechSynthesis.getVoices();
        console.log(voices);
        const thVoice = voices.find(voice => voice.lang === 'en-US');
        message.voice = thVoice;
    }

    function onClick(event){
        //console.log(event.target);
        message.text = event.target.getAttribute('alt');
        speechSynthesis.speak(message);
    }

    function run(){
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

        const imgElems = Array.from(document.querySelectorAll('img'));
        //console.log(imgElems);
        imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));
    }
    run();
})();