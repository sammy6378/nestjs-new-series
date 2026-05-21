import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
