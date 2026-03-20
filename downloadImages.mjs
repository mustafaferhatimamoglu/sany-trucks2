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

https.get('https://www.sanytrucksturkiye.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    const regex = /https:\/\/www\.sanytrucksturkiye\.com\/wp-content\/uploads\/[a-zA-Z0-9/_-]+\.(?:jpg|png|webp)/g;
    const allMatches = data.match(regex) || [];
    
    // Filtreleme: İkon, logo veya küçük versiyonları (örn. 150x150) dışla
    const validMatches = Array.from(new Set(allMatches)).filter(u => 
        !u.includes('logo') && 
        !u.includes('favicon') && 
        !u.match(/\d+x\d+/)
    );

    if (validMatches.length > 0) {
      console.log('Hero resim indiriliyor:', validMatches[0]);
      await download(validMatches[0], path.join(outDir, 'placeholder-hero.jpg'));
    }
    if (validMatches.length > 1) {
      console.log('Kamyon resim indiriliyor:', validMatches[1]);
      await download(validMatches[1], path.join(outDir, 'placeholder-truck.jpg'));
    }
    console.log("Görseller başarıyla sanytrucksturkiye.com'dan çekildi ve kaydedildi.");
  });
});
