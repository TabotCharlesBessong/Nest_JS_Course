import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/types';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    create(createSongDTO: CreateSongDTO): any[];
    findAll(): any[];
    findOne(): string;
    update(): string;
    delete(): string;
}
