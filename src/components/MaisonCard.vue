<script setup lang="ts">
import type { MaisonRecord } from '@/types'

defineProps<MaisonRecord>()
</script>
<template>
  <div class="Maison-card border-2 p-1">
    <p>nom : {{ nomMaison }}</p>
    <p>prix : {{ prix }}</p>
    <p> Nombres de Chambres : {{ nbChambres }}</p>
    <p>  Nombres de salle de bains : {{ nbSdb }}</p>
    <p>  Adresse : {{ adresse }}</p>
    <p>  Surface : {{ surface }}</p>
    <p>Favori : {{ Favori ? 'oui' : 'non' }}</p>
  </div>
</template>