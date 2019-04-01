import axios from 'axios'

export default {
  components: {

  },
  data () {
    return {
      nome: null,
      descricao: null,
      preco: null,
      categoria: null
    }
  },
  methods: {
    voltar () {
      this.$router.push('/')
    },
    cadastrar () {
      let novoProduto = {
        nomeProduto: this.nome,
        precoProduto: this.preco,
        categoriaProduto: this.categoria,
        descricaoProduto: this.descricao
      }
      console.log(novoProduto)
      axios.post('http://localhost:5000/api/produto', novoProduto)
        .then(res => {
          console.log(res)
        })
      this.nome = ''
      this.preco = null
      this.descricao = ''
      this.categoria = ''
    }
  }
}
