<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import type { MaisonRecord } from '@/pocketbase-types'
import { pb } from "@/backend";

/* const maisonsListe: MaisonRecord[] = [
  {
    "Favori": false,
    "adresse": "123 Rue Principale, Ville, Pays",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 11:57:55.324Z",
    "id": "9ufcvmm7a574oc3",
    "image": "029303e0faf547d1f0247bc2754a25c8_dSKAVmmfSa.jpg",
    "nbChambres": 4,
    "nbSdb": 7,
    "nomMaison": "Maison de campagne",
    "prix": 250000,
    "surface": 1537,
    "updated": "2024-04-11 12:17:32.841Z"
  },
  {
    "Favori": true,
    "adresse": "10 Rue de la Plage, Ville A, Pays A",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 12:02:02.942Z",
    "id": "6b6s3ndtvm6hb1e",
    "image": "99498d38fb904d0794adb62a28778d4e_3lUao1UkW7.jpg",
    "nbChambres": 6,
    "nbSdb": 4,
    "nomMaison": "Villa en bord de mer",
    "prix": 750000,
    "surface": 300,
    "updated": "2024-04-11 12:02:02.942Z"
  },
  {
    "Favori": false,
    "adresse": "20 Avenue du Centre, Ville B, Pays B",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 12:06:04.466Z",
    "id": "vc07v9s0vvwn80l",
    "image": "8793382577ecbc85a7d1d04520b3beaf_EBF1vvWyJV.jpg",
    "nbChambres": 10,
    "nbSdb": 2,
    "nomMaison": "Appartement moderne",
    "prix": 3500,
    "surface": 121,
    "updated": "2024-04-11 12:16:29.803Z"
  },
  {
    "Favori": false,
    "adresse": "40 Chemin des Pins, Ville D, Pays D",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 12:09:09.824Z",
    "id": "fszqoxy9dba5ci1",
    "image": "fiche_rJVRQZFSAY.jpg",
    "nbChambres": 4,
    "nbSdb": 0,
    "nomMaison": "Chalet de montagne",
    "prix": 50000,
    "surface": 90,
    "updated": "2024-04-11 12:17:46.972Z"
  },
  {
    "Favori": true,
    "adresse": "50 Avenue des Lilas, Ville E, Pays E",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 12:11:17.321Z",
    "id": "7izzfqh26ezd716",
    "image": "8e94531ad81eb571e2b6c54b0070e0f6_oKXwFIFXhn.jpg",
    "nbChambres": 3,
    "nbSdb": 3,
    "nomMaison": "Maison avec jardin",
    "prix": 4000,
    "surface": 189,
    "updated": "2024-04-11 12:16:47.589Z"
  },
  {
    "Favori": true,
    "adresse": "30 Rue des Roses, Ville F, Pays F",
    "collectionId": "m0lntespt5f1wd4",
    "collectionName": "maison",
    "created": "2024-04-11 12:13:28.726Z",
    "id": "24eqndn5hooa1g4",
    "image": "30168a8a7bdf7b3398a209528a138cc5_XXHXOF53e3.jpg",
    "nbChambres": 3,
    "nbSdb": 5,
    "nomMaison": "Maison de ville rénovée",
    "prix": 28000,
    "surface": 500,
    "updated": "2024-04-11 12:13:28.726Z"
  }
]
 */
const maisonsListe =  await pb.collection('maison').getFullList( {
        filter: 'Favori=true',
    });
 console.log(maisonsListe);

</script>

<template>
  <div>
      <MaisonCard  nomMaison="test"/>
<MaisonCard v-bind="maisonsListe[4 ]"/>
<MaisonCard v-for="unMaison in maisonsListe" :key="unMaison.id" v-bind="unMaison" />
    <h1 class="text-2xl">Bonjour monde !</h1>
    </div>
</template>

Voici les commentaires pour chaque ligne du code :

```html
<!-- Désactive la vérification ESLint pour les noms de composants avec plusieurs mots -->
<!-- eslint-disable vue/multi-word-component-names -->

<!-- Définit le script Vue en utilisant la syntaxe de la composition API et le langage TypeScript -->
<script setup lang="ts">
  // Importe le composant MaisonCard depuis '@/components/MaisonCard.vue'
  import MaisonCard from '@/components/MaisonCard.vue'
  // Importe le type MaisonRecord depuis '@/pocketbase-types'
  import type { MaisonRecord } from '@/pocketbase-types'
  // Importe pb depuis "@/backend"
  import { pb } from "@/backend";

  // Récupère la liste de maisons favorites depuis la base de données
  const maisonsListe = await pb.collection('maison').getFullList({
    filter: 'Favori=true',
  });
  // Affiche la liste des maisons favorites dans la console
  console.log(maisonsListe);
</script>

<!-- Définit le modèle de la page -->
<template>
  <!-- Conteneur principal -->
  <div>
    <!-- Affiche un composant MaisonCard avec un nom de maison statique -->
    <MaisonCard nomMaison="test"/>
    <!-- Affiche un composant MaisonCard avec les données de la cinquième maison de la liste -->
    <MaisonCard v-bind="maisonsListe[4]"/>
    <!-- Affiche un composant MaisonCard pour chaque maison dans la liste -->
    <MaisonCard v-for="unMaison in maisonsListe" :key="unMaison.id" v-bind="unMaison" />
    <!-- Titre de la page -->
    <h1 class="text-2xl">Bonjour monde !</h1>
  </div>
</template>
```

