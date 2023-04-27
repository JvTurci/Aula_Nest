import { Controller, Get, Post, HttpCode, Redirect, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService : CatsService) {}

    @Get()
    findAll(): Cat[]  {
        return this.catsService.findAll()
    }

    @Post()
    @HttpCode(201)
    create(@Body() createDto) {
        return this.catsService.create(createDto);
    }

    @Get('redirect')
    @Redirect('https://nestjs.com', 301)
    findSomeOne() : string{
        return "Fodase"
    }
}