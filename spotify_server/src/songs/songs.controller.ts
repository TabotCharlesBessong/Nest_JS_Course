import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/types';

@Controller('songs')
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(this.connection);
  }
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'I have that particular song now';
  }

  @Put(':id')
  update() {
    return 'Let update this song';
  }

  @Delete(':id')
  delete() {
    return "we don't need this song anymore";
  }
}
