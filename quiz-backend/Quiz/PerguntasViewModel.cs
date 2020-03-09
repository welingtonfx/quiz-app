using System.Collections.Generic;

namespace Quiz
{
    public class PerguntasViewModel
    {
        public int Id { get; set; }
        public IEnumerable<PerguntaViewModel> Perguntas { get; set; } = new List<PerguntaViewModel>();
    }

    public class PerguntaViewModel
    {
        public int Id { get; set; }
        public string Enunciado { get; set; }
        public IEnumerable<RespostaViewModel> Respostas { get; set; } = new List<RespostaViewModel>();
    }

    public class RespostaViewModel
    {
        public int Id { get; set; }
        public string Texto { get; set; }
        public bool Selecionada { get; set; }
    }
}
