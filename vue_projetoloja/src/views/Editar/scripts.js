import axios from 'axios'

export default {
  components: {

  },
  data () {
    return {
      id: this.$route.params.produto_id,
      produto: {}
    }
  },
  mounted () {
    axios.get(`http://localhost:5000/api/produto/${this.id}`)
      .then(res => {
        this.produto = res.data
        console.log(res)
      })
  },
  methods: {
    editar () {
      let produtoEditado = {
        id: this.id,
        nomeProduto: this.produto.nomeProduto,
        descricaoProduto: this.produto.descricaoProduto,
        precoProduto: this.produto.precoProduto,
        categoriaProduto: this.produto.categoriaProduto
      }
      axios.put(`http://localhost:5000/api/produto/${this.id}`, produtoEditado)
        .then(res => {
          this.produto = res.data
          console.log(res)
        })
    },
    voltar () {
      this.$router.push('/')
    }
  }
}
