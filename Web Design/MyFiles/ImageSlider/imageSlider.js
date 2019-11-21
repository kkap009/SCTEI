class Slider {
    consructor(_sliderLength,_el){
        this._sliderLength = _sliderLength;
        this._el = _el;
    }
    
    get sliderLength(){
        this._sliderLength = document.querySelector(this._el);
        return this._sliderLength;
    }
    
    set sliderLength(el){
        this._el = el; 
    }
}

const slider = new Slider();

slider.sliderLength='ul[data$=\"container\"]';
console.log(slider.sliderLength);