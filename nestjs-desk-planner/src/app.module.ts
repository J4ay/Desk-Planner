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
import { DeskController } from './controller/desk.controller';
import { DeskService } from './services/desk.service';
import { RoomController } from './controller/room.controller';
import { RoomService } from './services/room.service';
import { BookingController } from './controller/booking.controller';
import { BookingService } from './services/booking.service';
import { MessageSchema } from './schemas/message.schema';
import { MessageController } from './controller/message.controller';
import { MessageService } from './services/message.service';

import {
	KeycloakConnectModule,
	ResourceGuard,
	RoleGuard,
	AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/desk_manager')
		, MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }
									,{ name: 'Building', schema: BuildingSchema }
									,{ name: 'Floor', schema: FloorSchema }
									,{ name: 'Room', schema: RoomSchema}
									,{ name: 'Booking', schema: BookingSchema}
									,{ name: 'Message', schema: MessageSchema}
									]),
		AuthModule,
		KeycloakConnectModule.register({
			authServerUrl: 'http://localhost:8080/',
			realm: 'DeskPlanner',
			clientId: 'keycloak-reactjs-demo',
			secret: 'vIVQig3raIUX6CTgGMdVdCNXF90G1mN0',
		}),
	],
	controllers: [DeskController, BuildingController, FloorController,RoomController, BookingController, MessageController],
	providers: [DeskService, BuildingService, FloorService, RoomService, BookingService, MessageService,
		  {
			provide: APP_GUARD,
			useClass: AuthGuard,
		  },
		  {
			provide: APP_GUARD,
			useClass: ResourceGuard,
		  },
		  {
			provide: APP_GUARD,
			useClass: RoleGuard,
		  },],
})
export class AppModule {}
