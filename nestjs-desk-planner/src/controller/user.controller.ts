import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';

@Controller('/user')
export class UserController{

    constructor(private readonly userService: UserService) {}

    @Get()
    @Unprotected()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    @Unprotected()
    async addUser(
        @Body('userName') userName: string,
        @Body('userFirstName') userFirstName: string,
        @Body('userLastName') userLastName: string,
    ) {
        const createdUser = await this.userService.postUser(userName, userFirstName, userLastName);
        return createdUser;
    }

    @Delete()
    @Unprotected()
    async deleteAllUsers() {
        const users = await this.userService.deleteAllUsers();
        return users;
    }
}