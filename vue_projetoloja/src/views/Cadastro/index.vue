<template>
  <div
    class="container"
  >
    <div
      class="corpoCadastro"
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
            class="labelCadastro"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            v-model="nome"
            class="inputCadastro"
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
            class="labelCadastro"
          >
            Preço do Produto
          </label>
          <input
            type="number"
            v-model="preco"
            class="inputCadastro"
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
            class="labelCadastro"
          >
            Categoria
          </label>
          <input
            type="text"
            v-model="categoria"
            class="inputCadastro"
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
            class="labelCadastro"
          >
            Descrição do Produto
          </label>
          <textarea
            v-model="descricao"
            class="textCadastro"
          />
        </div>

        <div
          class="botaoFormulario"
        >
          <button
            class="btn btnCadastro"
            @click="cadastrar()"
          >
            Cadastrar
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
