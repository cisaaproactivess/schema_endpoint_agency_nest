import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Post('/access')
  access(@Body() payload: { email: string; password: string }): object {
    return {
      data: {
        message: 'Acceso permitido!',
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
            role: 'editor',
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
    };
  }
}
