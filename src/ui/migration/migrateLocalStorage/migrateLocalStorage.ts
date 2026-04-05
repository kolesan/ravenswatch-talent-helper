import { LocalStorage } from "ui/core/LocalStorage";

import { v1migration } from "./migrations/v1migration";

export function migrateLocalStorage(version: string) {
    if (migrationUtils.migrationDone(version)) {
        return;
    }
    migrationUtils.runMigration(version);
    migrationUtils.markMigrationDone(version);
}

const migrationUtils = {
    migrationFlagsKey: "rrh_migration_flags",
    migrationDone(version: string) {
        const migrationFlags = LocalStorage.get(this.migrationFlagsKey);
        return !!migrationFlags?.[version]?.done;
    },
    markMigrationDone(version: string) {
        const migrationFlags = LocalStorage.get(this.migrationFlagsKey);
        LocalStorage.set(this.migrationFlagsKey, {
            ...migrationFlags,
            [version]: { done: true },
        });
    },
    runMigration(version: string) {
        migrationMap[version]?.();
    },
}

const migrationMap: Record<string, () => void> = {
    v1: v1migration,
}
