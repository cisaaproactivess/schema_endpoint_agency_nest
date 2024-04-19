import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('api/users')
export class UsersController {
  @Post('update-password-email')
  updatePasswordEmail(@Body() payload: { email: string }): object {
    return {
      data: {
        message: `Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico ${payload.email}.`,
        result: '1-661ee2ef-2ab2a3866e6a6505362b14df',
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('update-password/:token')
  updatePasswordWithToken(
    @Param('token') token: string,
    @Body() payload: { password: string; confirmPassword: string },
  ): object {
    return {
      data: {
        message: ' Contraseña restablecida con éxito con su correo:',
        result: null,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('update-password')
  updatePassword(
    @Body() payload: { email: string; password: string; newPassword: string },
  ): object {
    return {
      data: {
        message: `Contraseña actualizada con éxito: ${payload}.`,
        result: [
          {
            id: 49,
            email: 'camilo.saavedra+0003@proactivess.cl',
            name: 'User',
            lastName: 'user',
            password:
              '$2a$10$G8HV4S0ec.cJlRoeLhkPzOtayYT5SkpR2XUzM2whsXpIRfzcHD3Mm',
            company: 'Test',
            company_id: 60,
            role: 'editor',
            publicaciones: 0,
            status: 'Activo',
            created_at: '2022-05-25T15:26:24.000Z',
            img: 'perfil:49-dbaabcdf-10a8-43a2-ad64-22832584dd16',
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

  @Get('getUser/:id')
  getUserById(@Param('id') id: number): object {
    return {
      data: {
        message: `Datos obtenidos correctamente con este ${id}`,
        result: {
          id: id,
          email: 'camilo.saavedra+0001@proactivess.cl',
          name: 'Admin',
          lastName: 'admin',
          password:
            '$2a$10$.PxneUefizLs9GnUEgwkRezWLRzcDuG5e3lCG4COE3dpZqsGlvXJ6',
          company: 'Test',
          company_id: 60,
          role: 'editor',
          publicaciones: 0,
          status: 'Activo',
          created_at: '2021-07-18T20:28:09.000Z',
          img: 'perfil:47-7c644eb8-5141-4660-99b8-3246d5466395',
          password_reset_token: 'ee799277-1d7a-43a7-aee1-54207249ed62',
          password_reset_token_expiration: '2023-11-14T20:34:47.000Z',
        },
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('get-image/:id')
  getImageUserById(@Param('id') id: number): object {
    return {
      data: {
        message: `Se obtuvo el source de imagen correctamente con este ${id}`,
        result:
          'https://agency-perfil-images.s3.us-east-1.amazonaws.com/perfil%3A47-7c644eb8-5141-4660-99b8-3246d5466395?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQGNFOHYDRCHRAU6H%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240416T202408Z&X-Amz-Expires=60&X-Amz-Signature=e17f2a62d4c4b59cf22a098bf250b842f8af73e2e2af405b661570bb2e4b4231&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('update/admin/:id')
  updateAdminById(
    @Param('id') id: number,
    @Body()
    payload: {
      email: string;
      name: string;
      lastName: string;
    },
  ): object {
    return {
      data: {
        message: `Información actualizada correctament con este id: ${id}`,
        result: [
          {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 0,
            info: 'Rows matched: 1  Changed: 1  Warnings: 0',
            serverStatus: 2,
            warningStatus: 0,
            changedRows: 1,
          },
          null,
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('add/admin')
  addUserAdmin(
    @Body()
    payload: {
      name: string;
      lastName: string;
      email: string;
      role: string;
    },
  ): object {
    return {
      data: {
        message: `Información actualizada correctamente!`,
        result: {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 141,
          info: '',
          serverStatus: 2,
          warningStatus: 0,
        },
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('create')
  createPost(
    @Body()
    payload: {
      image: string; // binary
      imageName: string;
      post_id: string;
      title: string;
      subtitle: string;
      category: string;
      content: string;
      user_id: number;
      tags: string; // array
      state: string;
      company_id: number;
    },
  ): object {
    return {
      data: {
        result: {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 296,
          info: '',
          serverStatus: 2,
          warningStatus: 0,
        },
        message: 'Post creado correctamente',
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }
}
