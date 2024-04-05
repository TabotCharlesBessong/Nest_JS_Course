import { Injectable, Scope } from "@nestjs/common"

@Injectable({
  scope:Scope.TRANSIENT
})
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
