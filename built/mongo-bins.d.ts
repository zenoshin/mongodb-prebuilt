import { SpawnOptions, ChildProcess } from 'child_process';
import { MongoDBPrebuilt } from './mongodb-prebuilt';
import { MongoSupervise } from './mongodb-supervise';
export declare class MongoBins {
    commandArguments: string[];
    spawnOptions: SpawnOptions;
    command: string;
    execPath: string;
    debug: any;
    childProcess: ChildProcess;
    mongoSupervice: MongoSupervise;
    mongoDBPrebuilt: MongoDBPrebuilt;
    constructor(command: string, commandArguments?: string[], spawnOptions?: SpawnOptions, version?: string);
    run(): Promise<boolean>;
    runCommand(): Promise<boolean>;
    getCommand(): Promise<string>;
    getCommandArguments(): Promise<string[]>;
}
