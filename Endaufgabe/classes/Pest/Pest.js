var GGSim;
(function (GGSim) {
    class Pest {
        position = 400;
        fieldX;
        fieldY;
        constructor(_fiedX, _fieldY) {
            this.fieldX = _fiedX;
            this.fieldY = _fieldY;
        }
        draw(_fieldX, _fieldY) {
            GGSim.ctx.resetTransform();
            this.fly(_fieldX, _fieldY);
            GGSim.ctx.scale(0.3, 0.3);
            GGSim.ctx.drawImage(GGSim.Asset.moth, 0, 0);
        }
        fly(_fieldX, _fieldY) {
            GGSim.ctx.translate(GGSim.Field.size * _fieldX + GGSim.Field.size / 2, GGSim.Field.size * _fieldY + GGSim.Field.size / 2 + this.position);
            if (this.position <= 0) {
                GGSim.ctx.rotate(-GGSim.animationTime);
            }
            else {
                this.position -= 5;
            }
        }
    }
    GGSim.Pest = Pest;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Pest.js.map