let i = null;

class Slider {
    construct() {

    }
}

class SliderFun {
    construct() {
        this._len = null;
        this._parent = null;
        this._child = null;
        this._copyChild = null;
        this._next = null;
        this._prev = null;
        this._now = null;
        this._setInterval = null;
        this._setTime = null;
        this._frame = null;
        this._speed = null;
        this._frameCount = null;
        this._width = null;
        this._left = null;
        this._right = null;
    }

    value() {
        this._next = 1;
        this._prev = -1;
        this._now = 0;
    }

    animation() {
        this._frame = 50;
        this._speed = 80;
        this._frameCount = 0;
        this._width = 100;
        this._left = null;
        this._right = null;
    }


    get imgLen() {
        return this._len;
    }

    set imgLen(el) {
        this._parent = el;

        if (!this._len) {
            this._len = document.querySelector(el).children.length;
        }
    }

    removeChilds(el) {
        const parent = document.querySelector(el);
        let next = this._next;

        while (this._copyChild[next]) {
            parent.removeChild(this._copyChild[next]);
            ++next;
        }
    }

    copyChilds(len, parent) {
        this._child = `${parent} > li`;

        const copyChild = document.querySelectorAll(this._child);
        this._copyChild = copyChild;
    }

    nextImage() {
        const child = document.querySelectorAll(this._child);
        const parent = document.querySelector(this._parent);
        
        if (!child[this._now].nextElementSibling) {
            parent.appendChild(this._copyChild[this._next]);
            parent.children[this._next].style.left = `${this.animation._width}%`;
            this._left = `${this.animation._width / this.animation._frame}%`;
        } else {
            if (this._frame === this._frameCount) {
                clearTimeout(this._setTime);
                clearInterval(this._setInterval);
                this._frameCount = 0;
            } else {
                for (i = 0; i < parent.children.length; ++i) {
                    parent.children[i].style.left = `-${this._left}%`;
                }

                this._setTime = setTimeout(this.nextImage, this._speed);
                ++this._frameCount;
            }
        }
    }
}

const sliderFun = new SliderFun();

sliderFun.value();
sliderFun.animation();
sliderFun.imgLen = "ul[data-attr$=Box]";
sliderFun.copyChilds(sliderFun.imgLen, sliderFun._parent);
sliderFun.removeChilds(sliderFun._parent);
sliderFun._setInterval = setInterval(sliderFun.nextImage, 3000);

