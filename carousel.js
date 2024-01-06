(function(window, document, undefined) {

   

    function slide(wrapper, items) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('slide'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
        index = 0,
        allowShift = true;
    
    wrapper.classList.add('loaded');

    
    function appendAfter(n, original, appendTo) {
        for(var i = 0; i < n; i++) {
            var clone = original[i].cloneNode(true);
            appendTo.appendChild(clone);
        }
    }
    appendAfter(4, slides, items);
    
    items.insertBefore(slides[slidesLength - 1].cloneNode(true), slides[0]);
    
    // Transition events
    items.addEventListener('transitionend', checkIndex);
    
    function shiftSlide(dir, action) {
        items.classList.add('shifting');
        
        if (allowShift) {
        if (!action) { posInitial = items.offsetLeft; }

        if (dir ==1) {
            items.style.left = (posInitial - slideSize) + "px";
            index++;      
        } else if (dir == -1) {
            items.style.left = (posInitial + slideSize) + "px";
            index--;      
        }
        
        };
        
        allowShift = false;
    }
        
    function checkIndex (){
        items.classList.remove('shifting');

        if (index == -1) {
        items.style.left = -(slidesLength * slideSize ) + "px";
        index = slidesLength - 1;
        }

        if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
        }
        allowShift = true;
    }
    
    setInterval(
        ()=>{
            shiftSlide(1)
        }, 2000
    )
    
    }

    window.onload = init;

    function init(){
        var slider = document.getElementById('slider'),
        sliderItems = document.getElementById('slides');
        slide(slider, sliderItems);
    }
})(window, document, undefined);