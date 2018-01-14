class BlockUnit {
    constructor(blockType) {
        this.blockType = blockType
        this.id_timestamp = new Date().getTime();
        this.time_Start = "";
        this.time_End = "";
        this.detail = "";
    }

    getTimeStamp() {
        return this.id_timestamp;
    }

    getBlockType() {
        return this.blockType;
    }
}

class Spot extends BlockUnit {
    constructor(){
        super("spot"); //don't forget "super"

        this.dayIndex = 0;
        this.orderIndex = 0;

        this.name = "";
        this.location = "";
        this.link = "";
        this.nextduration="";
    }
}

class Transport extends BlockUnit {
    constructor(){
        super("transport"); //don't forget "super"
        
        this.location_Start = "";
        this.location_End = "";
    }
}