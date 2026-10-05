import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInput } from './item-input';

describe('ItemInput', () => {
  let component: ItemInput;
  let fixture: ComponentFixture<ItemInput>;
  let emitted: string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemInput);
    component = fixture.componentInstance;
    emitted = [];
    component.itemAdded.subscribe((item) => emitted.push(item));
    await fixture.whenStable();
  });

  it('emits the trimmed item and clears the field', () => {
    component.newItem = '  brocolli  ';
    component.add();

    expect(emitted).toEqual(['brocolli']);
    expect(component.newItem).toBe('');
  });

  it('ignores an empty or blank entry', () => {
    component.newItem = '   ';
    component.add();

    expect(emitted).toEqual([]);
  });

  it('emits when the Ajouter button is clicked', () => {
    component.newItem = '5 pommes';
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emitted).toEqual(['5 pommes']);
  });
});
