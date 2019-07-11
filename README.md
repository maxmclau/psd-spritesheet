# psd-spritesheet

Simple Photoshop script that generates a compacted sprite sheet and JSON lookup table from a PSD. It's rough, but maybe it'll come in handy for someone else someday.

#### Usage

1. Open your PSD and remove all layers from layersets

2. Run the script in Photoshop via File > Scripts > Browse... or drag and drop psd-spritesheet.jsx onto Photoshop

#### Results

Before | After
:-:|:-:
![Before](docs/before.png "Layers Before")  |  ![After](docs/after.png "Layers After")

#### Thanks

- [@mapbox](https://github.com/mapbox/) for their 'packing lightmaps' js implementation [potpack](https://github.com/mapbox/potpack).
- Legend [@douglascrockford](https://github.com/douglascrockford) for classic [json2](https://github.com/douglascrockford/JSON-js)
