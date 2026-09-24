Events.on(ClientLoadEvent, () => {

let rand = new Rand();
Vars.content.planet("fs-repose").generator = extend(TantrosPlanetGenerator, {

getColor(position, out){
let depth = Simplex.noise3d(
this.seed,
2,
0.5,
2.25,
position.x,
position.y,
position.z
)

let color = Blocks.water.mapColor
if (depth >= 0.25) color = Blocks.grass.mapColor
if (depth >= 0.35) color = Blocks.sand.mapColor
if (depth >= 0.5) color = Blocks.stone.mapColor
if (depth >= 0.75) color = Blocks.snow.mapColor

out.set(color)
if (depth < 0.25) out.set(color)
},

getHeight(position){
return Mathf.clamp(
Simplex.noise3d(
this.seed,
2,
0.5,
2.25,
position.x,
position.y,
position.z
) / 1.5,
0,
1
)

},

genTile(position, tile){


let floor = Blocks.water
if (depth >= 0.25) floor = Blocks.grass;

let block = block = Blocks.air;
if (tile.floor == Blocks.grass && rand.chance(0.1)) block = Blocks.stoneWall;

tile.floor = floor;
tile.block = block;

}

})

Vars.content.planet("fs-repose").meshLoader = () => new HexMesh(Vars.content.planet("fs-repose"), 6)
Core.app.post(() => Vars.content.planet("fs-repose").reloadMesh())
  
});
