using System.Linq;
using System.Threading.Tasks;
using ProjetoLoja.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace ProjetoLoja.Data
{
    public class Repository : IRepository
    {
        public readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public async Task<bool> Save()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Produto> ProdutoPorId(int id)
        {
            var result = _context.Produtos.AsNoTracking().OrderBy(p => p.Id).Where(p => p.Id == id);
            return await result.FirstOrDefaultAsync();
        }

        public async Task<List<Produto>> TodosProdutos()
        {
            return await  _context.Produtos.ToListAsync();
        }

    }
}