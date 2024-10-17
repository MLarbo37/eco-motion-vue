<template>
  <div>
    <PowerStation v-if="selectedSection === 'Power stations'" />
    <EcoFlow v-if="selectedSection === 'Power stations ecoflow'" />
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/mainStore'
import PowerStation from '../components/Power Station/PowerStation.vue';
import { computed } from 'vue';
import EcoFlow from '../components/Power Station/EcoFlow.vue';

const sectionStore = useAppStore()
  
 const  selectedSection = computed(()=> sectionStore.section)
</script>
