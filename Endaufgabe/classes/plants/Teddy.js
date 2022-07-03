var GGSim;
(function (GGSim) {
    class Teddy extends GGSim.Plant {
        waterLevel = 4;
        maxWaterlevel = 4;
        fertilizeLevel = 0;
        maxFertilizeLevel = 4;
        fertilizeSteps = 3;
        pesticideAmount = 0;
        age = 0;
        maxAge = 2;
        priceValue = 1;
        isReady = false;
        pests = [];
        images = [GGSim.Asset.teddyPlantSeed, GGSim.Asset.teddyPlantSappling, GGSim.Asset.teddyPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        priceUpdate() {
            this.priceValue = GGSim.Market.price.costTeddy;
        }
    }
    GGSim.Teddy = Teddy;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Teddy.js.map