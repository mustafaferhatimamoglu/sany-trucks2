import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/mfi/.gemini/antigravity/scratch/sany-trucks/public/images';

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, res => {
    if (res.statusCode !== 200) return resolve(false);
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(true); });
  }).on('error', err => resolve(false));
});

async function main() {
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/07/cropped-Basliksiz-1.png', path.join(outDir, 'logo.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/07/Gemini_Generated_Image_hcf8z6hcf8z6hcf8-890x664.png', path.join(outDir, 'damperli.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/07/Gemini_Generated_Image_36bdlw36bdlw36bd-890x664.png', path.join(outDir, 'cekici.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/07/uc-arac-890x664.png', path.join(outDir, 'hafif.png'));
  console.log("Logo ve Kamyon gorselleri basariyla indirildi.");
}
main();
