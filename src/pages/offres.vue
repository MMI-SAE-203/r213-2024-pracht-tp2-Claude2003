
<template>
    <ul>
      <li v-for="uneMaison in maisonsListe" :key="uneMaison.id">
        <RouterLink
          :to="{
            name: 'offre-detail',
            params: {
              id: uneMaison.id
            }
          }"
          class="text-red-400 hover:text-red-600"
        >
          {{ uneMaison.nomMaison }}
        </RouterLink>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  
  </script>
  