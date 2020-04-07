<template>
  <div>
    <div v-for="(num, index) in b" :key="index">asdf</div>
  </div>
</template>
<script>
export default {
  computed:{
    a (){
      return {
        a:1,
        bb:2,
        ccc:3
      }
    },
    b (){
      return [1,2,3]
    }
  }
}
</script>