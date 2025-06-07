import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post()
    async login(@Body() body: LoginDto) {
        return this.authService.login(body.email, body.password);
    }
}
