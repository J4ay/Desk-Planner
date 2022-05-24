import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeskSchema } from './schemas/desk.schema';
import { BuildingSchema } from './schemas/building.schema';
import { FloorSchema } from './schemas/floor.schema';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/desk_manager'),MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema },{ name: 'Building', schema: BuildingSchema },{ name: 'Floor', schema: FloorSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
