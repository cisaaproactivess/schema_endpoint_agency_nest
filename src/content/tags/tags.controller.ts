import { Controller, Get } from '@nestjs/common';

@Controller('api/content')
export class TagsController {
  @Get('/tags')
  getTags(): any {
    return {
      data: {
        message: '¡Búsqueda finalizada con éxito!',
        result: [
          {
            id: 131,
            name: 'iPhone',
            created_at: null,
          },
          {
            id: 132,
            name: 'Apple',
            created_at: null,
          },
          {
            id: 133,
            name: 'iOS 17',
            created_at: null,
          },
          {
            id: 136,
            name: ' Aplicaciones iOS ',
            created_at: null,
          },
          {
            id: 137,
            name: 'Disney',
            created_at: null,
          },
          {
            id: 138,
            name: 'Tim Cook',
            created_at: null,
          },
          {
            id: 139,
            name: 'Vision Pro',
            created_at: null,
          },
          {
            id: 140,
            name: 'Steve Jobs',
            created_at: null,
          },
          {
            id: 141,
            name: 'campañas',
            created_at: null,
          },
          {
            id: 142,
            name: 'DSP',
            created_at: null,
          },
          {
            id: 143,
            name: 'DMP',
            created_at: null,
          },
          {
            id: 144,
            name: 'retargeting',
            created_at: null,
          },
          {
            id: 145,
            name: 'marketing',
            created_at: null,
          },
          {
            id: 146,
            name: 'Apple Watch',
            created_at: null,
          },
          {
            id: 148,
            name: 'WatchOS',
            created_at: null,
          },
          {
            id: 150,
            name: 'Android',
            created_at: null,
          },
          {
            id: 152,
            name: 'Test',
            created_at: null,
          },
          {
            id: 154,
            name: '',
            created_at: null,
          },
          {
            id: 157,
            name: 'Fintech',
            created_at: null,
          },
          {
            id: 158,
            name: 'IA',
            created_at: null,
          },
          {
            id: 160,
            name: 'iOS',
            created_at: null,
          },
          {
            id: 166,
            name: 'Blacky',
            created_at: null,
          },
          {
            id: 170,
            name: 'Google',
            created_at: null,
          },
          {
            id: 172,
            name: 'Maps',
            created_at: null,
          },
          {
            id: 177,
            name: 'Siri',
            created_at: null,
          },
          {
            id: 182,
            name: 'javascript',
            created_at: null,
          },
          {
            id: 183,
            name: 'programming',
            created_at: null,
          },
          {
            id: 184,
            name: 'tutorial',
            created_at: null,
          },
          {
            id: 185,
            name: 'beginners',
            created_at: null,
          },
          {
            id: 186,
            name: 'CEO',
            created_at: null,
          },
          {
            id: 187,
            name: 'VTC',
            created_at: null,
          },
          {
            id: 188,
            name: 'Tarifa',
            created_at: null,
          },
          {
            id: 189,
            name: 'Uber',
            created_at: null,
          },
          {
            id: 190,
            name: 'Meta',
            created_at: null,
          },
          {
            id: 191,
            name: 'Inteligencia artificial',
            created_at: null,
          },
          {
            id: 192,
            name: 'AI',
            created_at: null,
          },
          {
            id: 193,
            name: 'Tecnología',
            created_at: null,
          },
          {
            id: 194,
            name: 'Tweetdeck',
            created_at: null,
          },
          {
            id: 195,
            name: 'Actualidad',
            created_at: null,
          },
          {
            id: 196,
            name: 'Elon Musk',
            created_at: null,
          },
          {
            id: 197,
            name: 'Redes Sociales',
            created_at: null,
          },
          {
            id: 198,
            name: 'Twitter',
            created_at: null,
          },
          {
            id: 204,
            name: 'Rumor',
            created_at: null,
          },
          {
            id: 206,
            name: 'Novedad',
            created_at: null,
          },
          {
            id: 208,
            name: 'Apple TV',
            created_at: null,
          },
          {
            id: 209,
            name: 'Apple TV +',
            created_at: null,
          },
          {
            id: 213,
            name: 'Travel',
            created_at: null,
          },
          {
            id: 214,
            name: 'NEO',
            created_at: null,
          },
          {
            id: 215,
            name: 'Hotel',
            created_at: null,
          },
          {
            id: 216,
            name: 'iPhone 15',
            created_at: null,
          },
          {
            id: 217,
            name: 'M3',
            created_at: null,
          },
          {
            id: 219,
            name: 'moda',
            created_at: null,
          },
          {
            id: 220,
            name: 'tendencias',
            created_at: null,
          },
          {
            id: 221,
            name: 'belleza',
            created_at: null,
          },
          {
            id: 231,
            name: 'usuarios',
            created_at: null,
          },
          {
            id: 232,
            name: 'sustentabilidad',
            created_at: null,
          },
          {
            id: 233,
            name: 'markeitng',
            created_at: null,
          },
          {
            id: 234,
            name: 'ds',
            created_at: null,
          },
          {
            id: 236,
            name: 'Sonoma',
            created_at: null,
          },
          {
            id: 237,
            name: 'MacOS',
            created_at: null,
          },
          {
            id: 242,
            name: 'fco Rojas',
            created_at: null,
          },
          {
            id: 244,
            name: 'ediciones',
            created_at: null,
          },
          {
            id: 246,
            name: 'agencias',
            created_at: null,
          },
          {
            id: 249,
            name: 'Keynote',
            created_at: null,
          },
          {
            id: 250,
            name: 'Evento',
            created_at: null,
          },
          {
            id: 254,
            name: 'etc',
            created_at: null,
          },
          {
            id: 255,
            name: 'Test 1',
            created_at: null,
          },
          {
            id: 256,
            name: 'Test 2',
            created_at: null,
          },
          {
            id: 257,
            name: 'Test 3',
            created_at: null,
          },
          {
            id: 258,
            name: 'Test 4 ',
            created_at: null,
          },
          {
            id: 260,
            name: 'Test 6',
            created_at: null,
          },
          {
            id: 264,
            name: 'Test 8',
            created_at: null,
          },
          {
            id: 268,
            name: 'ODS',
            created_at: null,
          },
          {
            id: 272,
            name: 'chips',
            created_at: null,
          },
          {
            id: 274,
            name: 'M3 Max',
            created_at: null,
          },
          {
            id: 275,
            name: 'M3 Ultra',
            created_at: null,
          },
          {
            id: 277,
            name: 'Apple Silicon',
            created_at: null,
          },
          {
            id: 278,
            name: 'Apple Vission Pro',
            created_at: null,
          },
          {
            id: 285,
            name: 'Apple Music',
            created_at: null,
          },
          {
            id: 286,
            name: 'Spotify',
            created_at: null,
          },
          {
            id: 287,
            name: 'ExploraciónEspacial',
            created_at: null,
          },
          {
            id: 288,
            name: 'Ciencia',
            created_at: null,
          },
          {
            id: 289,
            name: 'Astronomía',
            created_at: null,
          },
          {
            id: 290,
            name: 'SaboresDelMundo',
            created_at: null,
          },
          {
            id: 291,
            name: 'Recetas',
            created_at: null,
          },
          {
            id: 292,
            name: 'CocinaCreativa',
            created_at: null,
          },
          {
            id: 293,
            name: 'Ejercicios',
            created_at: null,
          },
          {
            id: 294,
            name: 'VidaSaludable',
            created_at: null,
          },
          {
            id: 295,
            name: 'FitnessEnCasa',
            created_at: null,
          },
          {
            id: 297,
            name: 'Aplicaciones macOS',
            created_at: null,
          },
          {
            id: 298,
            name: 'Aplicaciones iOS',
            created_at: null,
          },
          {
            id: 299,
            name: 'ChatGPT',
            created_at: null,
          },
          {
            id: 300,
            name: 'Sam Altman',
            created_at: null,
          },
          {
            id: 307,
            name: 'Patentes',
            created_at: null,
          },
          {
            id: 313,
            name: 'iMac',
            created_at: null,
          },
          {
            id: 325,
            name: 'Test Test Test',
            created_at: null,
          },
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }
}
