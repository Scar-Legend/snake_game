import IInputHandler from "./IInputHandler"

class LRKeyInputHandler implements IInputHandler{
    wasLeftArrowPushed: boolean;
    wasRightArrowPushed: boolean;

    constructor() {
        this.wasLeftArrowPushed = false;
        this.wasRightArrowPushed = false;

    window.addEventListener('keydown', ({key}) => {
        if (key ==="ArrowLeft") {
            this.wasLeftArrowPushed = true;
           

        }
        if (key ==="ArrowRight") {
            this.wasRightArrowPushed = true;
        }
    });
    }
    
    madeLeftMove(): boolean {
        return this.wasLeftArrowPushed;
    }
    madeRightMove(): boolean {
        return this.wasRightArrowPushed;
    }
    resetLeftMove(): void {
        this.wasLeftArrowPushed = false;
    }
    resetRightMove(): void {
        this.wasRightArrowPushed = false;
    }

        }
        export default LRKeyInputHandler
