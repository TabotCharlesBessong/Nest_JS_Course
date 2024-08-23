import { Body, Controller, Post } from '@nestjs/common';
import { PlayListService } from './playlist.service';
import { CreatePlayListDTO } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';

@Controller('playlists')
export class PlayListController {
  constructor(private playListService: PlayListService) {}
  @Post()
  create(@Body() playlistDTO: CreatePlayListDTO): Promise<Playlist> {
    return this.playListService.create(playlistDTO);
  }
}
