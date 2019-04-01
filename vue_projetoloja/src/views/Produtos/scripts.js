import { mapGetters, mapActions } from 'vuex'

export default {
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {
    this.actionTodosProdutos()
  },
  computed: {
    ...mapGetters([
      'getterTodosProdutos'
    ])
  },
  methods: {
    ...mapActions([
      'actionTodosProdutos'
    ])
  }
}
