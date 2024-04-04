import { SongsService } from './songs.service';
import { CreateSongDTO } from "./dto/create-song-dto";
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(createSongDTO: CreateSongDTO): any[];
    findAll(): any[];
    findOne(): string;
    update(): string;
    delete(): string;
}
