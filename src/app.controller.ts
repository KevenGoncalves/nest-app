import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { Request as Req } from 'express';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { SkipAuth } from './decorators/skip-auth.decorator';
import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: Req<{ user: User }>) {
    return this.authService.login(req.user as User);
  }
}
