import { Component } from '@angular/core';
import { ServiceTemplate } from "../../shared/templates/service-template/service-template";

@Component({
  selector: 'app-service',
  imports: [ServiceTemplate],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service {}
