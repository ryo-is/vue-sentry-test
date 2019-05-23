<template lang="pug">
  .home
    h1.title Hello Vue.js!!
    el-button(@click="test()") Click Here!!
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Home extends Vue {
  public test() {
    (document.querySelector(".hoge") as Element).append("test")
  }
}
</script>
