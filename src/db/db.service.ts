// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '../generated/client';

// @Injectable()
// export class DbService extends PrismaClient implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect();
//   }
// }

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class DbService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    super({ adapter });
  }
}

// import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '../generated/client';
// import { PrismaPg } from '@prisma/adapter-pg';

// @Injectable()
// export class DbService extends PrismaClient {
//   constructor() {
//     const adapter = new PrismaPg({
//       connectionString: process.env.DATABASE_URL,
//     });
//     super({ adapter });
//   }
// }
