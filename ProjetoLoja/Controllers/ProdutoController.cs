using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjetoLoja.Data;
using ProjetoLoja.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace ProjetoLoja.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : Controller
    {
        public IRepository _repo { get; }

        public ProdutoController(IRepository repo){
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.TodosProdutos();
                return  Ok(result);
            }
            catch(System.Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        [HttpGet("{produtoId}")]
        public async Task<IActionResult> GetId(int produtoId)
        {
            try
            {
                var result = await _repo.ProdutoPorId(produtoId);
                return Ok(result);
            }
            catch(System.Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Produto produto)
        {
            try
            {
                _repo.Add(produto);

                if(await _repo.Save())
                {
                    return Ok();
                }
            }
            catch(System.Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
            return BadRequest();
        }

        [HttpPut("{produtoId}")]
        public async Task<IActionResult> Put(int produtoId, Produto model)
        {
            try
            {
                var produto = await _repo.ProdutoPorId(produtoId);
                if(produto == null) return NotFound();
                _repo.Update(model);

                if(await _repo.Save())
                {
                    produto = await _repo.ProdutoPorId(produtoId);
                    return Ok(produto);
                }
            }
            catch(System.Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
            return BadRequest();
        }

        [HttpDelete("{produtoId}")]
        public async Task<IActionResult> Delete(int produtoId)
        {
            try
            {
                var produto = await _repo.ProdutoPorId(produtoId);
                if(produto == null) return NotFound();
                _repo.Delete(produto);

                if(await _repo.Save())
                {
                    return Ok();
                }
            }
            catch (System.Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
            return BadRequest();
        }
    }
}