import { Playlist } from 'src/playlist/playlist.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    playLists: Playlist[];
}
