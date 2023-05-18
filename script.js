window.addEventListener("load", (event) => {

    class Drum{
        constructor(drumId, sound, key){
            this.drumId = drumId,
            this.sound = sound,
            this.key = key
            this.isPlaying = false;

            //Clicking makes it play sound
            document.getElementById(this.drumId).addEventListener('click', (e) => {
                this.playSound();                
            })

            //Keyboard keys make it play sound
            document.addEventListener('keydown', (event) => {
                if (event.key.toLowerCase() === this.key.toLowerCase() && !this.isPlaying) {                    
                    this.playSound();                  
                }
              });            
        }
        
        playSound(){
            this.sound.currentTime = 0;
            this.sound.play();
            this.isPlaying = true;            
            this.sound.addEventListener('ended', (e) => {
                this.isPlaying = false;
            })
            setTimeout(() => {
                this.isPlaying = false;
            }, 50);
        }
    }

    
    let audioTom1 = new Audio('./sounds/tom-1.mp3');
    let audioTom2 = new Audio('./sounds/tom-2.mp3');
    let audioTom3 = new Audio('./sounds/tom-3.mp3');
    let audioTom4 = new Audio('./sounds/tom-4.mp3');
    let audioSnare = new Audio('./sounds/snare.mp3');
    let audioKick = new Audio('./sounds/kick-bass.mp3');
    let audioCrash = new Audio('./sounds/crash.mp3');
    
    let tom_1 = new Drum('tom1', audioTom1, 'Q');
    let tom_2 = new Drum('tom2', audioTom2, 'W');
    let tom_3 = new Drum('tom3', audioTom3, 'E');
    let tom_4 = new Drum('tom4', audioTom4, 'R');
    let snare = new Drum('snare', audioSnare, 'T');
    let kick = new Drum('kick', audioKick, 'Y');
    let crash = new Drum('crash', audioCrash, 'U');    
});