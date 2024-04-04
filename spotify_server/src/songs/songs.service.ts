import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = []

  create(song){
    this.songs.push(song)
    return this.songs
  }
  findAll(){
    return this.songs
  }
}
