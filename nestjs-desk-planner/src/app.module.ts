import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeskSchema } from './schemas/desk.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/desk_manager'),MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
