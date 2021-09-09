<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDayBook">1</button>
    <button  @click="goToDayBook">1</button>
    <button  @click="goToDayBook" >1</button>
  </div>
</template>

<script>

export default {
  methods:{
    goToDayBook(){
      this.$router.push({name:'daybook'})
    }
  },
  name: 'Home',
  components: {
  }
}
</script>
