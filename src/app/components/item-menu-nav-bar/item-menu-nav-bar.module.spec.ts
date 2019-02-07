import { ItemMenuNavBarModule } from './item-menu-nav-bar.module';

describe('ItemMenuNavBarModule', () => {
  let itemMenuNavBarModule: ItemMenuNavBarModule;

  beforeEach(() => {
    itemMenuNavBarModule = new ItemMenuNavBarModule();
  });

  it('should create an instance', () => {
    expect(itemMenuNavBarModule).toBeTruthy();
  });
});
