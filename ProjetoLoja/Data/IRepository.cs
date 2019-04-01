using System.Collections.Generic;
using System.Threading.Tasks;
using ProjetoLoja.Models;

namespace ProjetoLoja.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;
        Task<bool> Save();
        Task<Produto> ProdutoPorId(int id);
        Task<List<Produto>> TodosProdutos();
    }
}