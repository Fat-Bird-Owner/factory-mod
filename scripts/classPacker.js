let lib = require("classLib");

Events.on(ClientLoadEvent, () => {
lib.classes.medianDrill(Vars.content.block("fs-median-drill"))
lib.classes.overdriveCore(Vars.content.block("fs-archived-core"), 15*8);
});
