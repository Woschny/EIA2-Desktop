namespace GGSim {

    export enum ACTION {
        FERTILIZE,
        HARVEST,
        WATER,
        PLANT,
        PESTICIDE
    } 
    
    export enum PLANTACTION {
        PILLOW,
        TEDDY,
        SCARF,
        BLANKET,
        SOCK
    }

    export interface Seed {
        type: PLANTACTION;
        amount: number;
    }

    export class Player {
        public static action: ACTION;
        public static plantAction: PLANTACTION;
        public static money: number;
        public static fertilizer: number = 20;
        public static pesticides: number = 20;
        public static seeds: Seed[] = [{type: PLANTACTION.PILLOW, amount: 0}, {type: PLANTACTION.TEDDY, amount: 0}, {type: PLANTACTION.SCARF, amount: 0}, {type: PLANTACTION.BLANKET, amount: 0}, {type: PLANTACTION.SOCK, amount: 0}];

        public fertilize(): void {
            if (Player.fertilizer > 0) { 
            Player.action = ACTION.FERTILIZE;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorFertilize.png) 50 50, auto";
            }
        }

        public water(): void {
            Player.action = ACTION.WATER;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorWater.png) 50 50, auto";
        }

        public pesticide(): void {
            if (Player.pesticides > 0) {
            Player.action = ACTION.PESTICIDE;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPesticide.png) 50 50, auto";
            }
        }

        public harvest(): void {
            Player.action = ACTION.HARVEST;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorHarvest.png) 50 50, auto";
        }

        public plant(_value: string): void {
            switch (_value) {
                case "pillow":
                    Player.plantAction = PLANTACTION.PILLOW;
                    break;
                case "teddy":
                    Player.plantAction = PLANTACTION.TEDDY;
                    break;
                case "blanket":
                    Player.plantAction = PLANTACTION.BLANKET;
                    break;
                case "scarf":
                    Player.plantAction = PLANTACTION.SCARF;
                    break;
                case "sock":
                    Player.plantAction = PLANTACTION.SOCK;
                    break;
            }
            Player.action = ACTION.PLANT ;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPlant.png) 50 50, auto";
            
        }

    }
}