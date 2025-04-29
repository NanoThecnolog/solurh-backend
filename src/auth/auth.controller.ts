import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() body: LoginDto) {
        return this.authService.login(body.email, body.password);
    }
}
