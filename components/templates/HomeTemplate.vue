<template>
  <div class="home-template">
    <Logo />

    <p>
      Olá, eu sou um programador independente e o criador da plataforma de
      cursos online <a href="https://cataline.io" target="_blank">Cataline</a>.
      Também costumo criar projetos open source e bibliotecas para ajudar a
      comunidade Javascript, você pode encontrar isso publicamente disponível em
      meu <a href="https://github.com/yungsilva" target="_blank">GitHub</a>.
    </p>

    <p>
      Também estou no
      <a href="https://facebook.com/yungsilva974/" target="_blank">Facebook</a>,
      as vezes posto algumas coisas sobre meu trabalho.
    </p>

    <p>
      Fora da programação eu gosto de praticar atividade física, comer sushi e
      passar tempo com meus cachorros.
    </p>

    <p>
      Caso queira falar comigo, pode falar em qualquer lugar que me encontrar na
      internet ou escrever um e-mail para
      <a href="mailto:contato@yungsilva.com">contato@yungsilva.com.</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.home-template {
  padding-bottom: 5rem;
  .logo {
    width: 230px;
    margin: 4rem 0;
    @include screen('small') {
      width: 200px;
    }
  }
  p {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.4;
    max-width: 40rem;
    margin: 1.3rem 0;
  }
  a {
    color: color(dark);
    position: relative;
    z-index: 1;
    &:before {
      content: '';
      background-color: color(primary);
      width: 105%;
      height: 40%;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      transition: height 0.1s linear;
      opacity: 0.4;
    }
    &:hover:before {
      height: 100%;
    }
  }
}
</style>
