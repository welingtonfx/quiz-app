import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerguntasService } from '../perguntas/perguntas.service';
import { PerguntasViewModel } from '../perguntas/perguntas.viewmodel';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public onIniciarQuiz(): void {
        this.router.navigate(['/perguntas'])
    }

}
