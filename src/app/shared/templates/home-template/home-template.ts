import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate {

}
