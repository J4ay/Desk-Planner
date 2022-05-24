import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './controller/building.controller';
import { BuildingService } from './services/building.service';
import { FloorController } from './controller/floor.controller';
import { FloorService } from './services/floor.service';
import { DeskSchema } from './schemas/desk.schema';
import { BuildingSchema } from './schemas/building.schema';
import { FloorSchema } from './schemas/floor.schema';
import { RoomSchema } from './schemas/room.schema';
import { BookingSchema } from './schemas/booking.schema';


@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/desk_manager')
		, MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }
									,{ name: 'Building', schema: BuildingSchema }
									,{ name: 'Floor', schema: FloorSchema }
									,{ name: 'Room', schema: RoomSchema}
									,{ name: 'Booking', schema: BookingSchema}])
	],
	controllers: [AppController, BuildingController, FloorController],
	providers: [AppService, BuildingService, FloorService],
})
export class AppModule {}
