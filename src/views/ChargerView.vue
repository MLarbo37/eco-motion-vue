<template>
  <div>
    <ChargerSection v-if="sectionStore.section === 'Electric chargerss'" />
    <ResidentialChargers v-if="sectionStore.section === 'Electric chargers'" />
  </div>
</template>

<script setup>
import { useAppStore } from '../stores/mainStore'
import ChargerSection from '../components/Chargers/ChargerSection.vue';
import ResidentialChargers from '../components/Chargers/ResidentialChargers.vue';
const sectionStore = useAppStore()
</script>
