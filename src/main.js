class TypeWriter {
    constructor(txtElement, words, wait= 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
            
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // getFullText
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length -1);
        }else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // Insert char
        this.txtElement.innerHTML = (`<span class="txt">${this.txt}</span>`);

        // Initial Type Speed
        let typeSpeed = 300
        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // Is word complete
        if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            // Set deleting to true
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // move to next word
            this.wordIndex++;
            // pause before start typing
            typeSpeed = 200;
        }

        setTimeout(()=> this.type(), typeSpeed);
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    const txtElement2 = document.querySelector('.txt-type-2');
    const words2 = JSON.parse(txtElement2.getAttribute('data-words'));
    const wait2 = txtElement2.getAttribute('data-wait');

    const txtElement3 = document.querySelector('.txt-type-3');
    const words3 = JSON.parse(txtElement3.getAttribute('data-words'));
    const wait3 = txtElement3.getAttribute('data-wait');

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
    new TypeWriter(txtElement2, words2, wait2);
    new TypeWriter(txtElement3, words3, wait3);
}