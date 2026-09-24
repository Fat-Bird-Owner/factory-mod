function medianDrill(block){

if (!(block instanceof Drill)) return;
block.buildType = () => extend(Drill.DrillBuild, block, {

accelerateSpeed(){
return Mathf.clamp(this.timeDrilled/180, 0, 5)
},

spinSpeed(){
return this.timeDrilled * this.block.rotateSpeed * this.accelerateSpeed()
},

draw(){
Draw.rect(this.block.region, this.x, this.y)
Draw.z(Layer.blockCracks)
this.drawDefaultCracks()

Draw.z(Layer.blockAfterCracks)
Drawf.spinSprite(this.block.rotatorRegion, this.x, this.y, this.spinSpeed())
Draw.color(this.dominantItem.color)
Drawf.spinSprite(this.block.itemRegion, this.x, this.y, this.spinSpeed());
Draw.reset()
},

updateTile(){

this.progress = this.timeDrilled;
if (this.progress >= this.block.getDrillTime(this.dominantItem)){
this.timeDrilled = 0;
Fx.shockwave.at(this.x, this.y, this.block.size*12)
Effect.shake(1.5, 1.5, this)
}

this.super$updateTile();

}
  
})}

exports.classes = {
 medianDrill: medianDrill
}
