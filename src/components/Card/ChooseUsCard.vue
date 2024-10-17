<template>
    <div class="container-choose">
      <div class="bg-white lg:w-[440px] lg:h-[314px] shadow-lg rounded-lg flex justify-center items-center choose-card">
        <div class="front flex flex-col justify-center items-center gap-4">
          <img :src="backgroundImage" :alt="title" />
          <p class="font-bold text-[16px] text-heading-secondary">{{ title }}</p>
        </div>
        <div class="back p-7">
          <img :src="backgroundImage" :alt="title" />
          <p class="font-bold text-[16px] text-white">{{ title }}</p>
          <br />
          {{ back }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { ServiceCardProps } from '@/types';
  
   defineProps<ServiceCardProps>();
  </script>
