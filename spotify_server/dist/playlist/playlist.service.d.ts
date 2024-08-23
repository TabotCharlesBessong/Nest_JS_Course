import { Song } from '../songs/song.entity';
import { Playlist } from './playlist.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreatePlayListDTO } from './dto/create-playlist.dto';
export declare class PlayListService {
    private playListRepo;
    private songsRepo;
    private userRepo;
    constructor(playListRepo: Repository<Playlist>, songsRepo: Repository<Song>, userRepo: Repository<User>);
    create(playListDTO: CreatePlayListDTO): Promise<Playlist>;
}
