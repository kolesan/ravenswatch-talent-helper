import fs from 'fs';

export function listDirFilesSyncRecursive(dir: string): string[] {
    return fs.readdirSync(dir, { recursive: true, withFileTypes: true })
        .filter(it => !it.isDirectory())
        .map(it => `${it.parentPath}\\${it.name}`);
}
