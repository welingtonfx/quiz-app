using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;

namespace Quiz
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]
    [Route("pergunta")]
    public class PerguntaController : ControllerBase
    {
        public PerguntaController()
        {

        }

        [HttpGet("obterperguntas")]
        public IActionResult ObterPerguntas()
        {
            return Ok(new PerguntaViewModel());
        }
    }
}
