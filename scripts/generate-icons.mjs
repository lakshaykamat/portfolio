import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "public", "profile_pic.png");
const OUT = join(ROOT, "public");

async function ensureDir(p) {
  await mkdir(dirname(p), { recursive: true });
}

async function square(size, name) {
  const out = join(OUT, name);
  await ensureDir(out);
  await sharp(SRC)
    .resize(size, size, { fit: "cover", position: "attention" })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(out);
  console.log("✓", name);
}

async function og() {
  const out = join(OUT, "og-image.png");
  const W = 1200, H = 630;
  const portrait = await sharp(SRC)
    .resize(560, 560, { fit: "cover", position: "attention" })
    .grayscale()
    .modulate({ brightness: 0.95 })
    .toBuffer();

  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0A0A0A"/>
          <stop offset="100%" stop-color="#141414"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
      <text x="80" y="200" font-family="Georgia, serif" font-size="120" fill="#FFFFFF" font-weight="400" letter-spacing="-4">Lakshay</text>
      <text x="80" y="340" font-family="Georgia, serif" font-size="120" fill="#FFFFFF" font-style="italic" font-weight="400" letter-spacing="-4">Kamat.</text>
      <text x="80" y="420" font-family="ui-monospace, monospace" font-size="22" fill="#888888" letter-spacing="3">FULL-STACK ENGINEER</text>
      <text x="80" y="560" font-family="ui-monospace, monospace" font-size="18" fill="#6B6B6B" letter-spacing="2">lakshaykamat.netlify.app</text>
    </svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: portrait, top: 35, left: W - 560 - 80 }])
    .png()
    .toFile(out);
  console.log("✓ og-image.png");
}

await Promise.all([
  square(16, "favicon-16x16.png"),
  square(32, "favicon-32x32.png"),
  square(180, "apple-touch-icon.png"),
  square(192, "android-chrome-192x192.png"),
  square(512, "android-chrome-512x512.png"),
  // favicon.ico — sharp can't write multi-size ICO, but a 32px PNG renamed is widely accepted; we'll keep a 32x32 .png
  // and let Next.js serve favicon.ico via the file in public.
  square(48, "favicon-48x48.png"),
]);

// favicon.ico — embed a 32x32 PNG with .ico header
{
  const png = await sharp(SRC)
    .resize(32, 32, { fit: "cover", position: "attention" })
    .png()
    .toBuffer();
  // ICO header: reserved(2)=0, type(2)=1, count(2)=1
  // ICONDIRENTRY: w(1), h(1), colorCount(1), reserved(1), planes(2), bitCount(2), size(4), offset(4)
  const header = Buffer.alloc(6 + 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  await writeFile(join(OUT, "favicon.ico"), Buffer.concat([header, png]));
  console.log("✓ favicon.ico");
}

await og();
console.log("\nDone.");
