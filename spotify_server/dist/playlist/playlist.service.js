"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayListService = void 0;
const song_entity_1 = require("../songs/song.entity");
const typeorm_1 = require("@nestjs/typeorm");
const playlist_entity_1 = require("./playlist.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let PlayListService = class PlayListService {
    constructor(playListRepo, songsRepo, userRepo) {
        this.playListRepo = playListRepo;
        this.songsRepo = songsRepo;
        this.userRepo = userRepo;
    }
    async create(playListDTO) {
        const playList = new playlist_entity_1.Playlist();
        playList.name = playListDTO.name;
        const songs = await this.songsRepo.findBy({ id: (0, typeorm_2.In)([playListDTO.songs]) });
        playList.songs = songs;
        const user = await this.userRepo.findOneBy({ id: playListDTO.user });
        playList.user = user;
        return this.playListRepo.save(playList);
    }
};
exports.PlayListService = PlayListService;
exports.PlayListService = PlayListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(playlist_entity_1.Playlist)),
    __param(1, (0, typeorm_1.InjectRepository)(song_entity_1.Song)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PlayListService);
//# sourceMappingURL=playlist.service.js.map