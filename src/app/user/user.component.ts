import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

type User = {
  avatar:string,
  name:string, 
  id:string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User
  @Input({required:true}) selected!: boolean
  @Output() select = new EventEmitter()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectedUser(){
    this.select.emit(this.user.id)
  }

  

}
