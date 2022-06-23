import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BuildingService } from '../services/building.service';
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';

@Controller('/building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) { }

  @Get()
  @Unprotected()
  getBuildings(@Body('buildingId') buildingId: number) {
    if (buildingId) {
      const request = this.buildingService.getBuildingById(buildingId);
      return request;
    }
    else {
      return this.buildingService.getBuildings();
    }
  }

  @Post()
  @Unprotected()
  async addBuilding(
    @Body('buildingId') buildingId: number,
    @Body('buildingName') buildingName: string,
    @Body('buildingAddress') buildingAddress: string,
    @Body('buildingHeight') buildingHeight: number,
  ) {
    const createdBuilding = await this.buildingService.postBuilding(buildingId, buildingName, buildingAddress, buildingHeight);
    return createdBuilding;
  }

  @Delete()
  @Unprotected()
  async deleteAllBuildings(@Body('buildingId') buildingId: number) {
    {
      if (buildingId) {
        const deletedBuilding = await this.buildingService.deleteBuildingById(buildingId);
        return deletedBuilding;
      }
      else {
        const building = await this.buildingService.deleteAllBuildings();
        return building;
      }
    }
  }
}