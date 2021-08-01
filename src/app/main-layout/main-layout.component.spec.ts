import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutComponent } from './main-layout.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent ],
      imports : [FormsModule , ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a textarea', ()=> {
    const textareaElement = fixture.debugElement.nativeElement.querySelectorAll('textarea')
    expect(textareaElement.length).toEqual(1)
  })

  it('should call countWords and return empty Map when text is empty', () => {
    let result = component.countWords('');
    expect(result.size).toEqual(0)
  });

  it('should call countWords and return Map size', () => {
    let result = component.countWords('something to test');
    expect(result.size).toEqual(3)
  });

  it('should check if countWords works correctly', () => {
    let countWordsResult = component.countWords('This is a test \n this test');
    let expectedResult = [1 , 1 , 1 , 2 , 1]
    expect(JSON.stringify(expectedResult) === JSON.stringify([...countWordsResult.values()])).toBeTrue()
  });

});
