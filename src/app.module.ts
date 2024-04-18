import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesController } from './companies/companies.controller';
import { PostsController } from './posts/posts.controller';
import { LoginController } from './auth/login/login.controller';
import { UsersController } from './users/users/users.controller';
import { PromotionalController } from './promotionalcode/promotional/promotional.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CompaniesController,
    PostsController,
    LoginController,
    UsersController,
    PromotionalController,
  ],
  providers: [AppService],
})
export class AppModule {}
