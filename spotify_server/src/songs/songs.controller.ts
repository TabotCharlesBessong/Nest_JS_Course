import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService:SongsService){}
  @Post()
  create(){
    return this.songsService.create("hi there")
  }

  @Get()
  findAll(){
    return this.songsService.findAll()
  }

  @Get(':id')
  findOne(){
    return "I have that particular song now"
  }

  @Put(":id")
  update(){
    return "Let update this song"
  }

  @Delete(":id")
  delete(){
    return "we don't need this song anymore"
  }
}
