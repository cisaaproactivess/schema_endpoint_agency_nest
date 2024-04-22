import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('api/companies')
export class CompaniesController {
  @Get('getAll')
  getCompanies(): object {
    return {
      data: {
        message: '¡Búsqueda finalizada con éxito!',
        result: [
          {
            id: 60,
            name: 'Test 45',
            category: 'Creatividad',
            razon_social: 'Test',
            RFC: '555111222',
            url: 'www.test.com',
            address: 'Los Maites 5544',
            country: 'Chile',
            city: 'Santiago',
            postal_code: '06000',
            phone: '111111111',
            created_at: null,
          },
          {
            id: 67,
            name: 'test 3',
            category: 'Marketing',
            razon_social: 'test',
            RFC: 'test',
            url: 'test',
            address: 'test',
            country: 'test',
            city: 'test',
            postal_code: 'C1002ABC',
            phone: '12341234',
            created_at: '2023-07-07T00:37:48.000Z',
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('getAll/V2')
  getCompaniesV2(): object {
    return {
      data: {
        message: '¡Búsqueda finalizada con éxito!',
        result: [
          {
            id: 60,
            name: 'Test 45',
            category: 'Creatividad',
            razon_social: 'Test',
            RFC: '555111222',
            url: 'www.test.com',
            address: 'Los Maites 5544',
            country: 'Chile',
            city: 'Santiago',
            postal_code: '06000',
            phone: '111111111',
            created_at: null,
          },
          {
            id: 67,
            name: 'test 3',
            category: 'Marketing',
            razon_social: 'test',
            RFC: 'test',
            url: 'test',
            address: 'test',
            country: 'test',
            city: 'test',
            postal_code: 'C1002ABC',
            phone: '12341234',
            created_at: '2023-07-07T00:37:48.000Z',
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('getCompany/:id')
  getCompanyById(@Param('id') id: number): object {
    return {
      data: {
        message: `Datos obtenidos correctamente con este id: ${id}`,
        result: {
          id: 60,
          name: 'Test 45',
          category: 'Creatividad',
          razon_social: 'Test',
          RFC: '555111222',
          url: 'www.test.com',
          address: 'Los Maites 5544',
          country: 'Chile',
          city: 'Santiago',
          postal_code: '06000',
          phone: '111111111',
          created_at: null,
        },
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('add')
  createCompany(
    @Body()
    payload: {
      name: string;
      category: string;
      razon_social: string;
      RFC: string;
      url: string;
      address: string;
      country: string;
      city: string;
      postal_code: string;
      phone: string;
      emailUser: string;
      nameUser: string;
      lastNameUser: string;
    },
  ): object {
    return {
      data: {
        message: '¡Empresa registrada con éxito!',
        result: payload,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }
}
