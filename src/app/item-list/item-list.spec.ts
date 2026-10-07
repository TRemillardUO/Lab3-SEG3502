import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemList } from './item-list';

describe('ItemList', () => {
  let fixture: ComponentFixture<ItemList>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemList],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemList);
    element = fixture.nativeElement;
  });

  it('renders one row with a Supprimer button per item', async () => {
    fixture.componentRef.setInput('items', ['5 pommes', '12 oeufs', '1 pain']);
    await fixture.whenStable();

    const labels = Array.from(element.querySelectorAll('.item-label')).map((el) => el.textContent?.trim());
    expect(labels).toEqual(['5 pommes', '12 oeufs', '1 pain']);
    expect(element.querySelectorAll('button').length).toBe(3);
  });

  it('emits the index of the item whose Supprimer button is clicked', async () => {
    const removed: number[] = [];
    fixture.componentInstance.itemRemoved.subscribe((index) => removed.push(index));
    fixture.componentRef.setInput('items', ['5 pommes', '12 oeufs', '1 pain']);
    await fixture.whenStable();

    (element.querySelectorAll('button')[1] as HTMLButtonElement).click();

    expect(removed).toEqual([1]);
  });

  it('shows a message when the list is empty', async () => {
    await fixture.whenStable();

    expect(element.querySelector('.item-empty')?.textContent).toContain('La liste est vide.');
  });
});
