import { selectedValue } from "./menu.js";

let aiSpeed;

if (selectedValue != null) {
    aiSpeed = selectedValue;
}

console.log(aiSpeed);

class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        // this.reset()
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }

    rect() {
        return this.paddleElem.getBoundingClientRect()
    }

    reset() {
        this.position = 50
    }

    update(delta, ballY) {
        this.position += aiSpeed * delta * (ballY - this.position)
    }
}

export default Paddle