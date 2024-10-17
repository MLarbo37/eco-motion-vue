<template>
    <div class="flex flex-col md:flex-row">
      <img
        :src="BydSeal"
        alt="byd seal"
        class="w-full h-[45vh] md:block md:w-[33.34vw] md:h-[40vh] flex-grow object-cover"
      />
      <img
        :src="BMWbike"
        alt="bmw bike"
        class="hidden w-full h-[50vh] md:block md:w-[33.34vw] md:h-[40vh] flex-grow object-cover"
      />
      <img
        :src="BydPlus"
        alt="Byd plus"
        class="hidden w-full h-[45vh] md:block md:w-[33.34vw] md:h-[40vh] flex-grow"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import BydSeal from "../../assets/seal-blue-pc.jpg";
  import BMWbike from "../../assets/bmw-bike.jpg";
  import BydPlus from "../../assets/ecoflow option.webp";  
  </script>
  
