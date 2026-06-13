import { Component } from '@angular/core';
import { ResultTemplate } from "../../shared/templates/result-template/result-template";

@Component({
  selector: 'app-result',
  imports: [ResultTemplate],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {}
