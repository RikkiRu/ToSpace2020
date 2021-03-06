class PartEffect {
    /**
    * @param {number} dx
    * @param {number} dy
    * @param {string} textureName
    */
    constructor(dx, dy, textureName) {
        this.dx = dx;
        this.dy = dy;
        this.textureName = textureName;
        this.hideOnIdle = true;
    }
}

class PartMeta {
    constructor() {
        this.materialMove = null;
        this.materialIdle = null;
        /** @type {Connection[]} */
        this.connections = [];
        /** @type {Connection[]} */
        this.blockConnections = [];
        this.fireRate = 0;
        this.healTime = 0;
        this.healValue = 0;
        this.fireRocketType = RocketTypes.laserBullet;
        this.fireMiniCount = 1;
        this.fireMiniDelay = 0;
        this.flipPartName = null;
        this.maxSpeedBoost = 0;
        this.acceleration = 0;
        this.rotateSpeed = 0;
        this.mass = 0.5;
        this.hp = 100;
        /** @type {PartEffect[]} */
        this.effects = [];
        this.canFireNearBlocksOnBreak = false;
        this.price = 10;
    }

    AddAllConnections() {
        this.connections.push(new Connection(-1, 0));
        this.connections.push(new Connection(1, 0));
        this.connections.push(new Connection(0, -1));
        this.connections.push(new Connection(0, 1));
    }
}