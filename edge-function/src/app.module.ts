import { Module } from '@nestjs/common';
import { MainService } from 'services/import/main.import';

@Module({
  providers: [MainService],
})
export class AppModule {}