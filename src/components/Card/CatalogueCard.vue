<template>
    <div class="w-[303px] rounded-2xl border flex justify-center items-center catalogue-container">
      <div class="my-4 catalogue-card">
        <div>
          <img
            :src="data.image"
            :alt="data.name"
            class="w-[271px] h-[197px] object-cover rounded-lg"
            width="271"
            height="197"
          />
          <p>{{ data.brand }}</p>
        </div>
          <div class="flex items-center gap-2 my-2">
          <img :src="letter" alt="letter" />
          <span>{{ data.name }}</span>
        </div>
  
        <div class="border-b border-[2px] w-[271px]"></div>
        <div class="flex justify-around my-2">
          <div class="flex flex-col justify-center items-center">
            <img :src="steering" alt="steering" />
            <span class="font-semibold text-[12px]">{{ data.batteryCapacity }}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img :src="tire" alt="tire" class="w-[20px]" />
            <span class="font-semibold text-[12px]">{{ data.maximumSpeed }}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img :src="gas" alt="gas" />
            <span class="font-semibold text-[12px]">{{ data.range }}</span>
          </div>
        </div>
        <button
          class="w-[271px] rounded-lg py-[10px] bg-[#0d9a56] font-semibold text-white text-center"
          @click="setOpenDialog(true)"
        >
          View More
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import letter from '@/assets/letter.png';
  import steering from '@/assets/battery.png';
  import gas from '@/assets/gas.svg';
  import tire from '@/assets/tire.svg';
  
   defineProps({
    data: Object,
    onClick: Function,
    setOpenDialog: Function,
  });
  </script>
  