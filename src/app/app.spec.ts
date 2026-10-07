import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('adds items at the end of the list', () => {
    const app = TestBed.createComponent(App).componentInstance;

    app.add('5 pommes');
    app.add('12 oeufs');

    expect(app.items).toEqual(['5 pommes', '12 oeufs']);
  });

  it('removes only the item at the given index, even with duplicates', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.items = ['1 pain', '12 oeufs', '1 pain'];

    app.remove(0);

    expect(app.items).toEqual(['12 oeufs', '1 pain']);
  });

  it('renders the input and list components', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-item-input')).toBeTruthy();
    expect(compiled.querySelector('app-item-list')).toBeTruthy();
  });
});
