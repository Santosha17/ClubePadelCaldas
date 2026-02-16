const sharp = require("sharp");

const sizes = [480, 800, 1200];
const input = "./src/assets/hero.webp";

sizes.forEach(size => {
    sharp(input)
        .resize(size)
        .toFile(`./src/assets/hero-${size}.jpeg`);
});