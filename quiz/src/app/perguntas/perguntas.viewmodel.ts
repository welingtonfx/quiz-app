export class PerguntasViewModel {
    Id: number;
    Perguntas: PerguntaViewModel[];
}

export class PerguntaViewModel {
    Id: number;
    Enunciado: string;
    Respostas: RespostaViewModel[];
}

export class RespostaViewModel {
    Id: number;
    Texto: string;
    Selecionada: boolean = false;
}