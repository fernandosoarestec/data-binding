import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://praisetecnologia.com.br';
  cursoAngular: boolean = true;
  urlImage = 'https://loremflickr.com/640/360';

  getValor() {
    return 1;
  }

  getCurtirCurso() {

    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
