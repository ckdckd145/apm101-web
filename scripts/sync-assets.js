const fs = require('fs');
const path = require('path');

const REFERENCE_DIR = path.join(__dirname, '../reference');
const PUBLIC_ASSETS_DIR = path.join(__dirname, '../public/assets/imported');

// Ensure public assets dir exists
if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
    fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });
}

console.log(`Scanning ${REFERENCE_DIR} for assets...`);

if (fs.existsSync(REFERENCE_DIR)) {
    const files = fs.readdirSync(REFERENCE_DIR);

    files.forEach(file => {
        // Basic image/video extensions
        if (/\.(png|jpg|jpeg|gif|svg|mp4|webm)$/i.test(file)) {
            const srcPath = path.join(REFERENCE_DIR, file);
            const destPath = path.join(PUBLIC_ASSETS_DIR, file);

            fs.copyFileSync(srcPath, destPath);
            console.log(`Synced: ${file}`);
        }
    });
} else {
    console.warn(`Reference directory not found at: ${REFERENCE_DIR}`);
}
