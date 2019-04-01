<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  div.container{ display: flex; justify-content: center; height: 500px;
  div.corpoFormulario{ background-color: rgba(255, 255, 255, 0.9); width: 40%; border: 0px solid #000; margin-top: 1em; border-radius: 7px;
    div.formulario{ font-size: 1.3em; font-weight: 100; font-family: Helvetica, sans-serif; margin-top: 2em;
      div.formataFormulario{ padding: 5px 15px 20px; margin-left: 3em;
      label.labelFormulario{ font-family: Blippo, fantasy; margin-left: 5px;}
      input.inputFormulario{ border-radius: 3px; font-family: Helvetica, sans-serif; font-size: 0.9em; outline:none; width: 80%; display:block; }
      input.inputFormulario:hover{ background-color: rgb(253, 255, 217); }
      input.inputFormulario:focus{ background-color: rgb(253, 255, 217); }
      textarea.textFormulario{ width: 80%; border-radius: 3px; font-family: Helvetica, sans-serif; font-size: 0.9em; outline:none; display: block; }
      textarea.textFormulario:hover{ background-color: rgb(253, 255, 217); }
      textarea.textFormulario:focus{ background-color: rgb(253, 255, 217); }
      }
      button.btnVoltar{ font-size: 1.2em; font-family: Helvetica, sans-serif; border-radius: 8px; cursor: pointer; background-color: rgba(226, 41, 41, 0.5); color: rgb(8, 8, 8); border-bottom: 4px solid #000; padding: 10px; font-weight: bolder; }
      button.btnVoltar:hover{ background-color: rgba(226, 41, 41, 1); border-bottom: 2px solid #000; }
    }
  }
}
}
body {
  background-image: url('/images/estrelas.gif');
  background-repeat: repeat;
}

</style>
