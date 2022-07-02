var GGSim;
(function (GGSim) {
    class Sock extends GGSim.Plant {
        waterLevel = 2;
        maxWaterlevel = 2;
        fertilizeLevel = 0;
        maxFertilizeLevel = 2;
        fertilizeSteps = 1;
        pesticideAmount = 0;
        age = 0;
        maxAge = 4;
        scaleX = 1;
        scaleY = 1;
        priceValue = 1;
        isReady = false;
        pests = [];
        dryColor = ["brown", "red", "orange", "yellow", "green"];
        images = [GGSim.Asset.sockPlantSeed, GGSim.Asset.sockPlantSappling, GGSim.Asset.sockPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        priceUpdate() {
            this.priceValue = GGSim.Market.price.costSocks;
        }
    }
    GGSim.Sock = Sock;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Sock.js.map