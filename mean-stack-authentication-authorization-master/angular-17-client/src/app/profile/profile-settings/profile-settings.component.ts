import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
  @Input() user1: any;

  editingUsername: boolean = false;

  toggleEditingUsername(): void {
    this.editingUsername = !this.editingUsername;
  }
}
