import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiImplicitQuery } from '@nestjs/swagger';

import PersonService from './person.service';
import CreatePersonDto from './dto/create-person.dto';
import Person from './interfaces/person.interface';

@Controller('person')
export default class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto): Promise<void> {
    this.personService.create(createPersonDto);
  }

  @ApiImplicitQuery({ name: "offset", required: true, type: Number })
  @ApiImplicitQuery({ name: "limit", required: true, type: Number })
  @Get()
  async find(@Query() params: any): Promise<Person[]> {
    return await this.personService.find(+params.offset, +params.limit);
  }

  @ApiImplicitQuery({ name: "search", required: false, type: String })
  @Get('find')
  findPerson(@Query('search') search: string, @Res() response): void {
    this.personService.findPerson(search, response);
  }
}