/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const hero = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(hero)) {
  fs.mkdirSync(hero);
}

fs.readdirSync(target).forEach((image) => {
  if (image === 'hero-image_4.jpg') {
    sharp(`${target}/${image}`)
      .resize(500)
      .toFile(
        path.resolve(__dirname, `${hero}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
      );

    sharp(`${target}/${image}`)
      .resize(700)
      .toFile(
        path.resolve(__dirname, `${hero}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`),
      );

    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(
        path.resolve(__dirname, `${hero}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
      );
  }
});
