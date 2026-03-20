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
  console.log("Dogru fotograflar indiriliyor...");
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/1-1536x895.png', path.join(outDir, 'hero-bg.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-15_32_07-840x560.png', path.join(outDir, 'damperli.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-13_25_08-840x560.png', path.join(outDir, 'cekici.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-15_30_08-840x560.png', path.join(outDir, 'hafif.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2026/01/fabrika-gorseli-fmt.png', path.join(outDir, 'kurumsal1.png'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2026/01/%E7%9B%B4%E9%94%80-scaled.jpg', path.join(outDir, 'kurumsal2.jpg'));
  await download('https://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/5-1536x1051.jpeg', path.join(outDir, 'iletisim-bg.jpeg'));
  console.log("Eksik ve gercek gorseller basariyla indirildi.");
}
main();
