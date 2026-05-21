import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '../generated/client';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Post()
  create(@Body() createMemberDto: Prisma.MemberCreateInput) {
    return this.memberService.create(createMemberDto);
  }

  @Get()
  findAll(name?: string) {
    return this.memberService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberDto: Prisma.MemberUpdateInput,
  ) {
    return this.memberService.update(id, updateMemberDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.memberService.delete(id);
  }
}
