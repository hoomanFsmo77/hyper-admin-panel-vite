<template>
  <font-awesome-icon @click="toggleTheme" :icon="themeFlag ? 'fa-regular fa-sun' : 'fa-solid fa-moon'"  class=" navbar-icon sm:mr-1.5"/>
</template>

<script  setup lang="ts">
import {ref,onMounted} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const themeFlag=ref( false)

const toggleTheme = () => {
  themeFlag.value=!themeFlag.value
  document.body.classList.toggle('dark')
  localStorage.setItem('x_hyper_theme_x',JSON.stringify(themeFlag.value))
}

onMounted(()=>{
  const storedData=localStorage.getItem('x_hyper_theme_x')
  if(storedData){
    themeFlag.value=JSON.parse(storedData)
    themeFlag.value ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }else{
    themeFlag.value=false
  }

})

</script>

<style scoped>

</style>