import { Test, TestingModule } from '@nestjs/testing';
import { PromotionalController } from './promotional.controller';

describe('PromotionalController', () => {
  let controller: PromotionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionalController],
    }).compile();

    controller = module.get<PromotionalController>(PromotionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
