const RocketTypes = {
    rocket: "rocket",
    laserBullet: "laserBullet",
}

class Rocket {
    /**
     * 
     * @param {THREE.Scene} scene 
     * @param {Rocket[]} storage 
     * @param {number} x 
     * @param {number} y
     * @param {number} angle
     * @param {THREE.Vector2} initialSpeed 
     * @param {string} team 
     * @param {string} rocketType 
     */
    constructor(scene, storage, x, y, angle, initialSpeed, team, rocketType) {
        let initialSpeedLen = initialSpeed.length();

        this.rocketType = rocketType;

        let textureName = this.rocketType;

        if (this.rocketType == RocketTypes.laserBullet && team == playerTeam) {
            textureName = "laserBulletBlue";
        }

        this.tObject = new THREE.Sprite(AppTextures.materials[textureName].clone());
        this.tObject.position.set(x, y, 0);
        this.tObject.scale.set(scaledTileGlobal, scaledTileGlobal, 1.0);
        this.mover = new ShipMover();
        this.mover.dSpeed = 1;
        this.mover.maxSpeed = initialSpeedLen + 10;
        this.mover.acceleration = 8000;
        this.mover.speedVector = initialSpeed.clone();

        this.maxGapAngle = 0.15;
        this.gapAngle = (Math.random() - 0.5) * this.maxGapAngle;
        this.gapAngleSpeed = 0.02;
        this.timer = 4 + Math.random() / 4;
        this.damageRadius = 24;
        this.damage = 70;

        if (this.rocketType == RocketTypes.laserBullet) {
            this.gapAngleSpeed = 0;
            this.timer = 1;
            this.damageRadius = 10;
            this.damage = 15;
            this.mover.maxSpeed = initialSpeedLen + 30;
            this.mover.acceleration = 20000;
        }

        this.initialTimer = this.timer;
        this.initialScaleY = this.tObject.scale.x;
        this.team = team;

        this.Rotate(angle);
        scene.add(this.tObject);
        storage.push(this);

        this.waitDestroy = false;
    }

    Update(dt) {
        this.timer -= dt;
        if (this.timer < 0) {
            this.timer = 0;
            this.waitDestroy = true;
            return;
        }

        if (this.rocketType == RocketTypes.laserBullet) {
            let newScale = this.timer / this.initialTimer * this.initialScaleY;
            if (newScale < 0.1)
                newScale = 0.1;
            this.tObject.scale.y = newScale;
        }

        if (this.gapAngleSpeed != 0) {
            this.Rotate(this.tObject.rotation.z + this.gapAngleSpeed);
            this.gapAngle += this.gapAngleSpeed;
            if (this.gapAngle > this.maxGapAngle || this.gapAngle < -this.maxGapAngle)
                this.gapAngleSpeed = -this.gapAngleSpeed;
        }

        if (this.mover != null)
            this.mover.Move(this, dt);
    }

    Rotate(angle) {
        this.tObject.material.rotation = angle;
        this.tObject.rotation.z = angle;
    }

    Dispose() {
        this.tObject.material.dispose();
    }
}