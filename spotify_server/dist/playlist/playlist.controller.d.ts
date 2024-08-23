import { PlayListService } from './playlist.service';
import { CreatePlayListDTO } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';
export declare class PlayListController {
    private playListService;
    constructor(playListService: PlayListService);
    create(playlistDTO: CreatePlayListDTO): Promise<Playlist>;
}
