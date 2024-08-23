import { Song } from '../songs/song.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreatePlayListDTO } from './dto/create-playlist.dto';

@Injectable()
export class PlayListService {
  constructor(
    @InjectRepository(Playlist)
    private playListRepo: Repository<Playlist>,

    @InjectRepository(Song)
    private songsRepo: Repository<Song>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(playListDTO: CreatePlayListDTO): Promise<Playlist> {
    const playList = new Playlist();
    playList.name = playListDTO.name;

    // songs will be the array of ids that we are getting from the DTO object
    const songs = await this.songsRepo.findBy({id:In([playListDTO.songs])});
    // set the relation for the songs with playlist entity
    playList.songs = songs;

    // A user will be the id of the user we are getting from the request
    // when we implemented the user authentication this id will become the loggedIn user id
    const user = await this.userRepo.findOneBy({ id: playListDTO.user });
    playList.user = user;

    return this.playListRepo.save(playList);
  }
}

// '(ids: any[]): Promise<Song[]>' is deprecated.ts(6385)
// Repository.d.ts(262, 8): The declaration was marked as deprecated here.

// Finds entities with ids. Optionally find options or conditions can be applied.

// @deprecated
// use findBy method instead in conjunction with In operator, for example:

// .findBy({ id: In([1, 2, 3]) })
