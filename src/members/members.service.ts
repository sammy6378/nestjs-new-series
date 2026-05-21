import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/client';
import { DbService } from '../db/db.service';

@Injectable()
export class MembersService {
  constructor(private readonly dbService: DbService) {}

  create(createMemberDto: Prisma.MemberCreateInput) {
    return this.dbService.member.create({ data: createMemberDto });
  }
  findAll(name?: string) {
    if (name)
      return this.dbService.member.findMany({
        where: {
          full_name: name,
        },
      });
    return this.dbService.member.findMany();
  }

  findOne(id: string) {
    return this.dbService.member.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateMemberDto: Prisma.MemberUpdateInput) {
    return this.dbService.member.update({
      where: {
        id,
      },
      data: updateMemberDto,
    });
  }

  delete(id: string) {
    return this.dbService.member.delete({
      where: {
        id,
      },
    });
  }
}
