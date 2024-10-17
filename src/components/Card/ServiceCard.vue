<template>
    <div class="border border-border-primary cursor-pointer bg-card-background w-[250px] h-[250px] sm:w-[345px] sm:h-[345px] flex justify-center items-center rounded-[87px] relative z-0">
      <div
        class="rounded-[87px] w-[220px] h-[220px] sm:w-[304px] sm:h-[304px] bg-cover bg-no-repeat bg-center flex justify-center items-center text-white"
        :style="{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      >
        <div class="text-center">
          <p class="font-bold text-[20px]">{{ title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: Object,
      required: true,
    },
  });
  </script>