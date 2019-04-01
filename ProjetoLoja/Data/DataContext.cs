using ProjetoLoja.Models;
using System.Collections.Generic;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace ProjetoLoja.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Produto> Produtos { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Produto>()
                .HasData(new List<Produto>(){
                    new Produto() { Id = 1, NomeProduto = "Barbie", PrecoProduto = 19.98, DescricaoProduto = "Boneca", CategoriaProduto = "Infantil" }
                }
            );
        }
    }
}