import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts(): object {
    return {
      data: {
        message: 'Registros encontrados exitosamente',
        result: [
          {
            id: 105,
            post_id: 'fa122130-b1e0-4d12-93a7-c821626d21b6',
            title:
              'Las mejores funciones de iOS 17 que prometieron pero todavía tardarán en llegar a tu iPhone',
            subtitle: 'Las funciones por las que deberemos esperar en iOS 17',
            category: 'Marketing',
            content: '<p>El pasado 5 de junio Apple presentó</p>',
            img: 'post_id:fa122130-b1e0-4d12-93a7-c821626d21b6',
            state: '2',
            url: 'https://www.revistaneo.com/articles/2023/07/31/la-luz-led-el-ingrediente-saludable-para-la-produccion-de-alimentos-sostenibles',
            company_id: 60,
            user_id: 7,
            created_at: '2023-06-21T00:08:02.000Z',
            published_at: null,
            billing_info_id: null,
            editor_id: null,
            blocked_by: null,
            company_name: 'entel',
            state_id: 2,
            state_label: 'En espera de pago',
            user_name: 'Test Editor',
          },
        ],
        count: 104,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('getAll/admin_panel')
  getAllPosts(): object {
    return {
      data: {
        message: 'Registros encontrados exitosamente',
        result: [
          {
            id: 105,
            post_id: 'fa122130-b1e0-4d12-93a7-c821626d21b6',
            title:
              'Las mejores funciones de iOS 17 que prometieron pero todavía tardarán en llegar a tu iPhone',
            subtitle: 'Las funciones por las que deberemos esperar en iOS 17',
            category: 'Marketing',
            content: '<p>El pasado 5 de junio Apple presentó</p>',
            img: 'post_id:fa122130-b1e0-4d12-93a7-c821626d21b6',
            state: '2',
            url: 'https://www.revistaneo.com/articles/2023/07/31/la-luz-led-el-ingrediente-saludable-para-la-produccion-de-alimentos-sostenibles',
            company_id: 60,
            user_id: 7,
            created_at: '2023-06-21T00:08:02.000Z',
            published_at: null,
            billing_info_id: null,
            editor_id: null,
            blocked_by: null,
            company_name: 'entel',
            state_id: 2,
            state_label: 'En espera de pago',
            user_name: 'Test Editor',
          },
        ],
        count: 104,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get(':id')
  getPostById(@Param('id') id: string): object {
    return {
      data: {
        message: 'Se obtuvo el post correctamente',
        result: [
          {
            id: id,
            post_id: id,
            title: 'ñ{oerit',
            subtitle: 'alñF',
            category: 'Marketing',
            content: '<p>-LOEUWTOÑQIEURTÑOIWEURGOÑIU</p>',
            img: 'post_id:78304c0a-c9e4-4374-8860-d862528e5469',
            state: '5',
            url: null,
            company_id: 77,
            user_id: 64,
            created_at: '2023-08-28T20:22:29.000Z',
            deleted_at: null,
            billing_info_id: null,
            editor_id: null,
            blocked_by: null,
            published_by: null,
            published_at: null,
            promotional_code: null,
            content_type: null,
          },
        ],
      },
      status: '200',
      tags: [
        {
          name: '',
        },
      ],
      url: 'https://agency-posts-images.s3.us-east-1.amazonaws.com/post_id%3A78304c0a-c9e4-4374-8860-d862528e5469?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQGNFOHYDRCHRAU6H%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240416T203922Z&X-Amz-Expires=60&X-Amz-Signature=b658dde26d2f7e84089495486514c7c56db6a78b07031201f32ff60a58ed63fb&X-Amz-SignedHeaders=host&x-id=GetObject',
      code: 200,
      error: null,
    };
  }

  @Post('get/post_by_promotional_code/:id')
  getPostByPromotionalCode(@Param('id') id: number): object {
    return {
      data: {
        message: `Registros encontrados exitosamente con este id: ${id}`,
        result: [
          {
            title: 'Fitness en casa: Transforma tu cuerpo sin salir de tu sala',
            created_at: '2023-11-22T12:43:36.000Z',
            published_at: null,
            editor_name: null,
            post_state: 'En espera de publicacion',
          },
          {
            title:
              '"Los Android son dispositivos de rastreo masivo”: Apple dispara a Google en una presentación confidencial filtrada',
            created_at: '2023-11-22T01:41:57.000Z',
            published_at: null,
            editor_name: null,
            post_state: 'En espera de publicacion',
          },
          {
            title: 'Cocina creativa: Sabores del mundo en tu hogar',
            created_at: '2023-11-22T12:41:51.000Z',
            published_at: null,
            editor_name: null,
            post_state: 'En espera de publicacion',
          },
          {
            title: 'Descubriendo los secretos del universo',
            created_at: '2023-11-22T12:40:03.000Z',
            published_at: null,
            editor_name: null,
            post_state: 'En espera de publicacion',
          },
        ],
        count: 4,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('get/post-history-flow/:id')
  getPostHistoryFlow(@Param('id') id: number): object {
    return {
      data: {
        message: `Registros encontrados exitosamente con este id: ${id}`,
        result: [
          {
            id: 203,
            posts_id: '0a470507-06df-45c4-880e-b22a0b5fce5f',
            state_id: 1,
            message: 'Creado',
            created_at: '2023-07-17T20:28:33.000Z',
          },
          {
            id: 204,
            posts_id: '0a470507-06df-45c4-880e-b22a0b5fce5f',
            state_id: 2,
            message: 'En espera de pago',
            created_at: '2023-07-17T20:28:33.000Z',
          },
        ],
        count: 7,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('getAll/V2')
  getAllPostsV2(): object {
    return {
      data: {
        message: 'Registros encontrados exitosamente',
        result: [
          {
            id: 105,
            post_id: 'fa122130-b1e0-4d12-93a7-c821626d21b6',
            title:
              'Las mejores funciones de iOS 17 que prometieron pero todavía tardarán en llegar a tu iPhone',
            subtitle: 'Las funciones por las que deberemos esperar en iOS 17',
            category: 'Marketing',
            content: '<p>El pasado 5 de junio Apple presentó</p>',
            img: 'post_id:fa122130-b1e0-4d12-93a7-c821626d21b6',
            state: '2',
            url: 'https://www.revistaneo.com/articles/2023/07/31/la-luz-led-el-ingrediente-saludable-para-la-produccion-de-alimentos-sostenibles',
            company_id: 60,
            user_id: 7,
            created_at: '2023-06-21T00:08:02.000Z',
            published_at: null,
            billing_info_id: null,
            editor_id: null,
            blocked_by: null,
            company_name: 'entel',
            state_id: 2,
            state_label: 'En espera de pago',
            user_name: 'Test Editor',
          },
        ],
        count: 104,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('update/finish-publication/:id')
  updatePosts(@Param('id') id: number): object {
    return {
      data: {
        message: `Se actualizo el estado del posts correctamente con este id: ${id}`,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Post('update/finish-publication/:id')
  updateFinishPosts(
    @Param('id') id: number,
    @Body() payload: { link: string; editor_id: number },
  ): object {
    return {
      data: {
        message: `Se actualizo el estado del posts y se finalizo la publicación exitosamente con este id: ${id} and ${payload}`,
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }

  @Get('posts/get_posts/:id')
  getAllPostFromUser(@Param('id') id: number): object {
    return {
      data: {
        message: `¡Búsqueda finalizada con éxito!`,
        result: [
          {
            id: 270,
            post_id: 'c6d62f0f-c932-41e5-8473-ff24f1e76a9e',
            title: '[TEST] NO PUBLICAR',
            subtitle: '[TEST] NO PUBLICAR',
            category: 'AGENDA 2030',
            content:
              '<p class="ql-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat eget ipsum vel consequat. Nunc ut neque a elit fringilla dapibus quis non massa. Cras ornare luctus dolor ut gravida. Suspendisse potenti. Praesent in risus eu lorem blandit dapibus. Quisque bibendum in est eu ultricies. Curabitur ultrices turpis lectus, non iaculis eros vulputate eu. In eleifend interdum auctor. Suspendisse volutpat velit erat, mollis bibendum lorem elementum id. Aenean semper nisl ultrices odio maximus pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ut sapien vitae eros commodo scelerisque. Etiam ac varius sem. Aliquam ut volutpat felis, a rhoncus erat.</p><p class="ql-align-justify">Quisque convallis consectetur augue quis imperdiet. Donec at malesuada est. Donec dictum odio nec magna eleifend, sed posuere est sodales. Cras nec magna id orci malesuada finibus. Praesent elementum risus quis diam varius convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque venenatis convallis ex ornare vehicula. Sed ac pellentesque quam, sed tempor justo. Etiam et risus sit amet leo posuere volutpat eget vel massa. Donec vel eros euismod, maximus ipsum in, finibus velit. Vestibulum sed neque tristique, tristique mi sit amet, gravida tortor. Mauris dignissim est a fringilla pellentesque. Nunc a turpis facilisis, semper urna ac, tincidunt ligula. Suspendisse commodo nec felis eget cursus.</p><p>[TEST] NO PUBLICAR - [TEST] NO PUBLICAR - [TEST] NO PUBLICAR - [TEST] NO PUBLICAR</p>',
            img: 'post_id:c6d62f0f-c932-41e5-8473-ff24f1e76a9e',
            state: '2',
            url: null,
            company_id: 93,
            user_id: 106,
            created_at: '2024-03-14T02:07:51.000Z',
            deleted_at: null,
            billing_info_id: null,
            editor_id: null,
            blocked_by: null,
            published_by: null,
            published_at: null,
            promotional_code: null,
            imageUrl:
              'https://agency-posts-images.s3.us-east-1.amazonaws.com/post_id%3Ac6d62f0f-c932-41e5-8473-ff24f1e76a9e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQGNFOHYDRCHRAU6H%2F20240417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240417T140620Z&X-Amz-Expires=60&X-Amz-Signature=297f2634d4b32aaa68c687a4446b29f6468e5a53bcb0c84117a36ab45bee4fcb&X-Amz-SignedHeaders=host&x-id=GetObject',
          },
        ],
        imageUrl: [
          'https://agency-posts-images.s3.us-east-1.amazonaws.com/post_id%3Ac6d62f0f-c932-41e5-8473-ff24f1e76a9e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQGNFOHYDRCHRAU6H%2F20240417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240417T140620Z&X-Amz-Expires=60&X-Amz-Signature=297f2634d4b32aaa68c687a4446b29f6468e5a53bcb0c84117a36ab45bee4fcb&X-Amz-SignedHeaders=host&x-id=GetObject',
        ],
      },
      status: 'Ok',
      code: 200,
      error: null,
    };
  }
}
