import Fighter from "./Fighter";

export default class Player extends Fighter {

    constructor(x: number, y: number) {
        super('Player', x, y);
    }
}
