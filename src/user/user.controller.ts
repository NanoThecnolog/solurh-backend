import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createUser(@Body() data: CreateUserDto) {
        return this.userService.create(data)
    }
    @Get()
    findAll() {
        return this.userService.findAll()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id))
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    UpdateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.userService.update(parseInt(id), data)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id))
    }
}