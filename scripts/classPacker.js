let lib = require("classLib");

Events.on(ClientLoadEvent, () => {
lib.classes.medianDrill(Vars.content.block("fs-median-drill"))
});
