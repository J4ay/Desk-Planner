import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeskSchema } from './schemas/desk.schema';

@Module({
<<<<<<< HEAD
  imports: [MongooseModule.forRoot('mongodb://localhost/db')],
=======
  imports: [MongooseModule.forRoot('mongodb://localhost/desk_manager'),MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }])],
>>>>>>> 37475824f62d827c53fe51fb864fbb6e5089f2aa
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
