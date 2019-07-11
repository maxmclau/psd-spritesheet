// 
// PSD Spritesheet
// Author: Maxmillion McLaughlin <github@maxmclau.com>
// Date: July 2019
// Homepage: https://maxmclau.com
//

#target photoshop

#include 'inc/json2.jsx';
#include 'inc/potpack.jsx';

(function(){
    app.bringToFront();
    app.activeDocument.duplicate();

    var doc = app.activeDocument;
    var sets = doc.layerSets;

    var sprites = [];

    var output = new File(String(Folder.desktop + "/spritesheet.json"));
    var folder = output.saveDlg('Select spritesheet JSON output location.');

    output.open('w');

    for(var i = 0; i < doc.layers.length; i++) {
        ref = doc.layers[i];
        
        var sprite = {
            id: ref.id,

            sx: ref.bounds[0].value,
            sy: ref.bounds[1].value,

            w: parseInt(ref.bounds[2]-ref.bounds[0]),
            h: parseInt(ref.bounds[3]-ref.bounds[1]),

            layer: ref
        }

        sprites.push(sprite);
    }

    var pack = potpack(sprites);

    var result = confirm('Your generated spritesheet will be ' + pack.w + 'px x ' + pack.h + 'px. Continue?', false);
    if(result === false) {
        doc.close(SaveOptions.DONOTSAVECHANGES);
        return;
    }

    doc.resizeCanvas(UnitValue(pack.w,"px"), UnitValue(pack.h,"px"));
    for(var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];

        var bounds = sprite.layer.bounds;
            bounds[0] = sprite.x - bounds[0];
            bounds[1] = sprite.y - bounds[1];
                
        sprite.layer.translate(-bounds[0], -bounds[1]);
    }

    var json = JSON.stringify(sprites, ['x', 'y', 'w', 'h', 'sx', 'sy']);
    output.writeln(json);

    output.close();
})();