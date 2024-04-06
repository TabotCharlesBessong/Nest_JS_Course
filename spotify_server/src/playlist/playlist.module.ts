import { Module } from '@nestjs/common';
import { PlayListController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { PlayListService } from './playlist.service';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Song, User])],
  controllers: [PlayListController],
  providers: [PlayListService],
})
export class PlayListModule {}
