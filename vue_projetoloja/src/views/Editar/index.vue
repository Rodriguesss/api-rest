<template>
  <div
    class="container"
  >
    <div
      class="corpoEditar"
    >
      <form
        class="formulario"
      >
        <div
          class="formataFormulario"
        >
          <img
            src="/icons/nome.png"
            width="25px"
          >
          <label
            for="nome"
            class="labelEditar"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            v-model="produto.nomeProduto"
            class="inputEditar"
          >
        </div>

        <div
          class="formataFormulario"
        >
          <img
            src="/icons/preco.png"
            width="25px"
          >
          <label
            for="nome"
            class="labelEditar"
          >
            Preço do Produto
          </label>
          <input
            type="number"
            v-model="produto.precoProduto"
            class="inputEditar"
          >
        </div>

        <div
          class="formataFormulario"
        >
          <img
            src="/icons/categoria.png"
            width="25px"
          >
          <label
            for="nome"
            class="labelEditar"
          >
            Categoria
          </label>
          <input
            type="text"
            v-model="produto.categoriaProduto"
            class="inputEditar"
          >
        </div>

        <div
          class="formataFormulario"
        >
          <img
            src="/icons/descricao.png"
            width="25px"
          >
          <label
            for="nome"
            class="labelEditar"
          >
            Descrição do Produto
          </label>
          <textarea
            v-model="produto.descricaoProduto"
            class="textEditar"
          />
        </div>

        <div
          class="botaoFormulario"
        >
          <button
            type="submit"
            class="btn btnEditar"
            @click="editar()"
          >
            Editar
          </button>
          <button
            class="btn btnVoltar"
            @click="voltar()"
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="sass">
  @import './style.scss'
</style>
