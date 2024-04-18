import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('promotional')
export class PromotionalController {
  @Post('generate ')
  generatePromotionalCode(
    @Body()
    payload: {
      company_id: number;
      max_used: number;
      payment_info: string;
    },
  ): object {
    return {
      data: {
        message: 'Código promocional creado con éxito',
        result: payload,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('validate')
  validatePromotionalCode(
    @Body() payload: { promotional_code: string; company_id: number },
  ): object {
    return {
      data: {
        message: 'El código ingresado es válido',
        total_articulos_publicados:
          'Existen un total de: 0 artículos publicados con este código',
        total_articulos_restantes:
          'Queda un total de: 5 artículos  para utilizar con este código',
        result: [
          {
            id: 157,
            code: '7766dbca-d80e-4af2-9759-055383d33ceb',
            company_id: 93,
            times_used: 0,
            max_used: 5,
            payment_info: 'Convenio',
            discount: 100,
            created_at: '2024-03-14T02:04:48.000Z',
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('get/:id')
  getCodesByCompanyID(@Param() id: number): object {
    return {
      data: {
        message: '¡Búsqueda finalizada con éxito!',
        result: [
          {
            id: 157,
            code: '7766dbca-d80e-4af2-9759-055383d33ceb',
            company_id: 93,
            times_used: 0,
            max_used: 5,
            payment_info: 'Convenio',
            discount: 100,
            created_at: '2024-03-14T02:04:48.000Z',
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }
}
