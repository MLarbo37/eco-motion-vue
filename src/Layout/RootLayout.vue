<template>
    <div class="font-inter">
        <GlobalHeader />
        <main>
          <slot></slot>
        </main>
        <GlobalInformation />
        <GlobalQuotation />
        <GlobalFooter />
    </div>
  </template>
  
  <script setup>
import GlobalHeader from "@/components/Header/GlobalHeader.vue";
import GlobalInformation from "@/components/Information/GlobalInformation.vue"
import GlobalQuotation from "@/components/Quotation/GlobalQuotation.vue";
import GlobalFooter from "@/components/Footer/GlobalFooter.vue";
  


  </script>
  
  <style scoped>
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
  </style>
  