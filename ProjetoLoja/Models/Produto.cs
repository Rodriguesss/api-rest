using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoLoja.Models
{
    public class Produto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string NomeProduto { get; set; }

        [Required]
        public string DescricaoProduto { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{0:F2}")]
        public double PrecoProduto { get; set; }

        [Required]
        public string CategoriaProduto { get; set; }

    }
}