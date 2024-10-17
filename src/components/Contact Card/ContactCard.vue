<template>
    <div class="w-[280px] shadow-lg p-5 font-medium text-address-text-color rounded-xl">
      <div class="mb-1 flex gap-2 justify-start items-center">
        <span class="bg-[#F9DBAF] p-2 rounded-lg">
          <img :src="image" alt="card" class="w-[16px]" />
        </span>
        {{ title }}
      </div>
      <div class="font-bold text-[16px] text-secondary-color pb-2">{{ Info }}</div>
      <div class="text-[12px]">{{ subInfo }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
 defineProps<{
    image: string;
    title: string;
    Info: string;
    subInfo: string;
  }>();
  </script>
  
  