import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  @Post('/access')
  access(
    @Res() res: Response,
    @Body() payload: { email: string; password: string },
  ): any {
    res.status(200).json({
      data: {
        message: 'asdad',
        result: [
          {
            id: 48,
            email: 'camilo.saavedra+0002@proactivess.cl',
            name: 'Editor',
            lastName: 'editor',
            password:
              '$2a$10$/eha13LEp2ZVu7MtWJxfuOx2JgicbVRG9v.LhH5QzeHZLvvloKt7i',
            company: 'Test',
            company_id: 60,
            role: 'user',
            publicaciones: 11,
            status: 'Activo',
            created_at: '2023-01-18T19:31:54.000Z',
            img: 'perfil:48-8a3ae301-2d8b-44d2-8230-c723554f9c46',
            password_reset_token: null,
            password_reset_token_expiration: null,
          },
          {
            id: 48,
            email: 'alejoemmott@gmail.com',
            name: 'marcelo',
            lastName: 'emmott',
            password: '123456',
            company: 'Test',
            company_id: 60,
            role: 'user',
            publicaciones: 11,
            status: 'Activo',
            created_at: '2023-01-18T19:31:54.000Z',
            img: 'perfil:48-8a3ae301-2d8b-44d2-8230-c723554f9c46',
            password_reset_token: null,
            password_reset_token_expiration: null,
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    });
  }
}
