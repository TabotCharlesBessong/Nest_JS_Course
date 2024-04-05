import { Artist } from 'src/artists/artist.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from "typeorm"

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;

  @Column('text')
  lyrics: string;

  @ManyToOne(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  @Column('varchar', { array: true })
  artists: string[];

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playList: Playlist;
}
