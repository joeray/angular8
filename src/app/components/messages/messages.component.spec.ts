import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
import { MessageService } from 'src/app/message.service';

describe('UserFormComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [
        MessageService
      ]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    const messageService = fixture.debugElement.injector.get(MessageService)
    messageService.add('fake_message')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load message elements', () => {
    expect(fixture.nativeElement.querySelector('.message')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.message').innerText).toEqual('fake_message');
    expect(fixture.nativeElement.querySelector('.clear')).not.toBeNull();
  });
});
