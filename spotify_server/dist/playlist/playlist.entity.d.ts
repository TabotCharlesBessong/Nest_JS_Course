import { Song } from 'src/songs/song.entity';
import { User } from 'src/user/user.entity';
export declare class Playlist {
    id: number;
    name: string;
    songs: Song[];
    user: User;
}
