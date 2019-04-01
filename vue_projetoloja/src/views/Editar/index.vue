<template>
  <div
    class="container"
  >
    <div
      class="corpoFormulario"
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
            class="labelFormulario"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            v-model="produto.nomeProduto"
            class="inputFormulario"
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
            class="labelFormulario"
          >
            Preço do Produto
          </label>
          <input
            type="number"
            v-model="produto.precoProduto"
            class="inputFormulario"
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
            class="labelFormulario"
          >
            Categoria
          </label>
          <input
            type="text"
            v-model="produto.categoriaProduto"
            class="inputFormulario"
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
            class="labelFormulario"
          >
            Descrição do Produto
          </label>
          <textarea
            v-model="produto.descricaoProduto"
            class="textFormulario"
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
