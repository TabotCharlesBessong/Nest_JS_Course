import {
  Body,
  Controller,
  Request,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../utils/public-decorator';
import { UserDTO } from '../users/user-dto';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: Record<string, string>) {
    return await this.authService.login(loginDto.username, loginDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('signup')
  async signup(@Body() userDto: UserDTO) {
    await this.userService.singup(userDto);
    return 'Successfully signed up with: ' + userDto.email;
  }
}
