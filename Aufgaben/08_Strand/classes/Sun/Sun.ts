namespace strand {

    enum ACTION {
        RISING,
        SPINNING
    }

    export class Sun extends BeachObject {
        color: string;
        private action: ACTION = ACTION.RISING;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }

        move(): void {

            this.mox = -700 - i;
            this.moy = -400 * Math.sin(i / 400);
            this.mosX = 1 * Math.sin(i / 500);
            this.mosY = 1 * Math.sin(i / 500);

            switch (this.action) {
                case ACTION.RISING:
                    this.mor = 0;
                    break;
                case ACTION.SPINNING:
                    this.mor = 200;
                    break;
            }

        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            let crabSun: Crab = new Crab(0, 0, 3.1 + Math.sin(i / 100) * this.mor, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            reset();
        }

        interact(_x: number, _y: number): void {
            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 100 && distanceY < 100 && picked == false) {
            console.log("Sun ", distanceX, distanceY);
            if (this.action == ACTION.RISING) {
                this.action = ACTION.SPINNING;
            }
            else if (this.action == ACTION.SPINNING) {
                this.action = ACTION.RISING;
            }

            picked = true;
            }
        }

    }
}