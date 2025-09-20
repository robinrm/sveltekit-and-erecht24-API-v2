import { readFile } from 'node:fs/promises';

export interface CheckPullResponse {
    lastpull: string;
    datediff: number;
    fileExists: boolean;
    offlinedata: string | null;
}

export async function CheckPullRequest(LastPullLog: string, FilePath: string, timelimit: number): Promise<CheckPullResponse> {
    let lastpull = '';
    let datediff = 0;
    let fileExists = false;
    let offlinedata: string | null = null;

    try {
        lastpull = await readFile(LastPullLog, 'utf8');
    } catch {
        lastpull = '';
    }

    const datenow = new Date();
    const datenowMs = datenow.getTime();
    const lastpullMs = lastpull ? Date.parse(lastpull) : 0;
    datediff = datenowMs - lastpullMs;

    try {
        offlinedata = await readFile(FilePath, 'utf8');
        fileExists = true;
    } catch {
        offlinedata = null;
        fileExists = false;
    }

    if (!fileExists) {
        datediff = timelimit + 1; // force fetch
    }

    return { lastpull, datediff, fileExists, offlinedata };
}