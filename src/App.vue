<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, watch} from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
import CreateNewPostView from './views/CreateNewPostView.vue';
const store = useStore();

store.commit('setPostData', store.dispatch('getPosts').then((res => res))) 
let posts = computed(() => store.getters.posts)


console.log( posts,'posts')

</script>

<template>
   <NavBar />
   <ul>
          <li v-for="post in posts" :key="post.id">
              {{post.title}}
          </li>
      </ul>

   <main>
    <RouterView />
   </main>

</template>

<style scoped>

</style>

