import { Component, OnInit } from '@angular/core';
import { PerguntasService } from './perguntas.service';
import { PerguntasViewModel } from './perguntas.viewmodel';

@Component({
	selector: 'app-perguntas',
	templateUrl: './perguntas.component.html',
	styleUrls: ['./perguntas.component.scss'],
	providers: [PerguntasService]
})
export class PerguntasComponent implements OnInit {
	private perguntas: PerguntasViewModel;

	constructor(private service: PerguntasService) { }

	ngOnInit(): void {
		this.service.obterPerguntas().subscribe(retorno => {
			this.perguntas = retorno;
		})
	}

}
