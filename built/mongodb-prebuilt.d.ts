import { MongoDBDownload } from 'mongodb-download';
export declare class MongoDBPrebuilt {
    mongoDBDownload: MongoDBDownload;
    private debug;
    private binPath;
    constructor(mongoDBDownload?: MongoDBDownload, version?: string);
    getHomeDirectory(): string;
    getBinPath(): Promise<string>;
    private resolveBinPath(extractLocation);
    private hasValidBinPath(files);
}
