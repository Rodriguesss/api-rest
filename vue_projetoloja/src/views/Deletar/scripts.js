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
    deletar (produto) {
      axios.delete(`http://localhost:5000/api/produto/${this.id}`)
        .then(() => {
          let indice = this.produto.indexOf(produto)
          this.produto.splice(indice, 1)
        })
    },
    voltar () {
      this.$router.push('/')
    }
  }
}
