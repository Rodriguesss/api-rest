<template>
  <div>
    <div class="botaoDiv">
      <router-link
        to="/cadastro"
        tag="td"
        class="btnCadastro"
      >
        Novo Produto
      </router-link>
    </div>
    <div>
      <table
        border="3px"
        class="tabelaProdutos"
      >
        <thead
          class="headTabelaProdutos"
        >
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Opções</th>
        </thead>
        <tbody
          v-if="getterTodosProdutos.length"
          class="bodyTabelaProdutos"
        >
          <tr
            v-for="(produto, index) in getterTodosProdutos"
            :key="index"
          >
            <td>
              {{ produto.nomeProduto }}
            </td>
            <td>{{ produto.descricaoProduto }}</td>
            <td>R${{ produto.precoProduto }}</td>
            <td>{{ produto.categoriaProduto }}</td>
            <td class="opcoes">
              <router-link
                :to="`/editar/${produto.id}`"
                tag="button"
                class="btnEditar"
              >
                Editar
              </router-link>
              <router-link
                :to="`/deletar/${produto.id}`"
                tag="button"
                class="btnDeletar"
              >
                Deletar
              </router-link>
            </td>
          </tr>
        </tbody>
        <tfoot
          v-else
        >
          <tr>
            <td
              colspan="5"
              style="text-align: center"
            >
              <h5
                class="NaoEncotrado"
              >
                Nenhum Produto Encontrado
              </h5>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="sass">
  @import './style.scss'
</style>
