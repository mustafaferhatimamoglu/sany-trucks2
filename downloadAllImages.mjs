import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const imageGroups = {
  hafif: [
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-15_30_08.png', name: 'hafif-hero.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082538038.png', name: 'hafif-gallery-1.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082541866.png', name: 'hafif-gallery-2.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082546683.png', name: 'hafif-gallery-3.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082550883.png', name: 'hafif-gallery-4.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082600628.png', name: 'hafif-gallery-5.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250923082606278.png', name: 'hafif-gallery-6.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/beyaz_on-1.png', name: 'hafif-beyaz-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/beyaz_yan-1.png', name: 'hafif-beyaz-yan.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/kirmizi_on-1.png', name: 'hafif-kirmizi-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/kirmizi_yan-1.png', name: 'hafif-kirmizi-yan.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/3.png', name: 'hafif-detail-3.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/2.png', name: 'hafif-detail-2.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/1.png', name: 'hafif-detail-1.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-6-Mar-2026-11_59_00.png', name: 'hafif-extra.png' },
  ],
  cekici: [
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-13_25_08.png', name: 'cekici-hero.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-13_26_08.png', name: 'cekici-hero-2.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/4.png', name: 'cekici-gallery-4.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/3.png', name: 'cekici-gallery-3.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/5.png', name: 'cekici-gallery-5.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/6.png', name: 'cekici-gallery-6.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/beyaz_on.png', name: 'cekici-beyaz-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/beyaz_yan.png', name: 'cekici-beyaz-yan.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/kirmizi_on.png', name: 'cekici-kirmizi-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/02/kirmizi_yan.png', name: 'cekici-kirmizi-yan.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/tenteli-dorse.png', name: 'cekici-tenteli-dorse.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/damper-dorse.png', name: 'cekici-damper-dorse.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/ChatGPT-Image-25-Sub-2026-15_36_30.png', name: 'cekici-extra.png' },
  ],
  damperli: [
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ChatGPT-Image-4-Mar-2026-15_32_07.png', name: 'damperli-hero.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250715-155213_103157-scaled.webp', name: 'damperli-gallery-1.webp' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250717-102319_103231-scaled.webp', name: 'damperli-gallery-2.webp' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250717-102258_103219-scaled.webp', name: 'damperli-gallery-3.webp' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/20250717-102243_103210-scaled.webp', name: 'damperli-gallery-4.webp' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/beyaz_on.png', name: 'damperli-beyaz-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/beyaz_yan.png', name: 'damperli-beyaz-yan.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/kirmizi_on.png', name: 'damperli-kirmizi-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/kirmizi_yan.png', name: 'damperli-kirmizi-yan.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/mavi_on.png', name: 'damperli-mavi-on.png' },
    { url: 'http://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/mavi_yan.png', name: 'damperli-mavi-yan.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/2lklsls.png', name: 'damperli-detail-2.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/3moo.png', name: 'damperli-detail-3.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2026/03/1kllkl.png', name: 'damperli-detail-1.png' },
    { url: 'https://www.sanytrucksturkiye.com/wp-content/uploads/2024/02/ara-gorsel.png', name: 'damperli-ara-gorsel.png' },
  ],
};

const outputDir = path.join(__dirname, 'public', 'images', 'trucks');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function downloadFile(urlStr, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = urlStr.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    const request = protocol.get(urlStr, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36' }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`HTTP ${response.statusCode} for ${urlStr}`));
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
    });
    request.on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
  });
}

async function downloadAll() {
  let success = 0, failures = [];
  for (const [group, images] of Object.entries(imageGroups)) {
    console.log(`\n📦 Downloading ${group} images (${images.length})...`);
    for (const img of images) {
      const destPath = path.join(outputDir, img.name);
      try {
        await downloadFile(img.url, destPath);
        console.log(`  ✅ ${img.name}`);
        success++;
      } catch (e) {
        console.log(`  ❌ ${img.name}: ${e.message}`);
        failures.push(img.name);
      }
    }
  }
  console.log(`\n✅ Done! ${success} succeeded, ${failures.length} failed.`);
  if (failures.length) console.log('Failed:', failures.join(', '));
}

downloadAll();
