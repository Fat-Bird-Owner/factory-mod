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

function overdriveCore(block, range){ 
block.buildType = () => extend(CoreBlock.CoreBuild, block, 
{

timer: new Interval(),

drawSelect(){

Vars.indexer.eachBlock(this, 160, other => true, other => {
Drawf.selected(other, this.team.color)
})

let col = this.team.color.cpy();
col.a = Mathf.absin(4, 0.5)

Drawf.dashCircle(this.x, this.y, 160, col)

},

updateTile(){

if (this.timer.get(55)) {

Vars.indexer.eachBlock(this, 160, other => true, other => {
other.applyBoost(1.2, 60)
});

}

}

});
  
}

exports.classes = {
 medianDrill: medianDrill,
 overdriveCore: overdriveCore
}
