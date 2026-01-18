import fs from 'fs';
import path from 'path';

const REFERENCE_DIR = path.join(process.cwd(), 'reference');

export function getLegalDocument(type: 'privacy' | 'terms'): string {
    if (!fs.existsSync(REFERENCE_DIR)) {
        return '# Error\nReference directory not found.';
    }

    const files = fs.readdirSync(REFERENCE_DIR);
    let bestMatch = '';

    const keywords = type === 'privacy'
        ? ['privacy', '개인정보', 'policy']
        : ['terms', '이용약관'];

    for (const file of files) {
        if (!file.endsWith('.md')) continue;

        const lower = file.toLowerCase();
        if (keywords.some(k => lower.includes(k))) {
            bestMatch = file;
            break;
        }
    }

    if (!bestMatch) {
        return `# Not Found\nCould not find a matching markdown file for ${type}.`;
    }

    return fs.readFileSync(path.join(REFERENCE_DIR, bestMatch), 'utf-8');
}
