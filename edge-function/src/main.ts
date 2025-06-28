import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MainService } from './services/import/main.import';

export const handler = async (context: any) => {
  
  const app = await NestFactory.createApplicationContext(AppModule, {
      logger: ['error'],
  });
    
  const result = await app.get(MainService).execute(context);
  
  await app.close();
    
    return {
      status: 200,
      body: result,
    };
};