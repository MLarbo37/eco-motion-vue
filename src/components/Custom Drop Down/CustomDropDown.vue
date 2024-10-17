<template>
    <div>
      <div
        class="text-[#3a4655] flex cursor-pointer justify-center gap-2  p-[5px] w-[127px] border-[2px] rounded-lg font-semibold"
        @click="toggleDropdown"
      >
        Filter by
        <img :src="arrowDown" alt="Arrow drop down" class="w-[20px]" />
      </div>
  
      <div
        v-if="isVisible"
        class="absolute bg-white w-[170px] mt-2 text-[14px] shadow-lg h-[300px] overflow-y-scroll"
      >
        <div
          v-for="option in filterOptions"
          :key="option"
          class="pl-2 py-2 font-medium hover:bg-black hover:text-white transition-shadow"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import arrowDown from '@/assets/down.png';
import { useAppStore } from '../../stores/mainStore';
  
  const filterOptions = [
    'BMW',
    'Byd',
    'Everbright',
    'Gaso Electric',
    'Geely',
    'Honda',
    'Maxus',
    'Tesla',
    'Toyota',
    'VW',
    'Xpeng',
  ];
  const isVisible = ref(false);
  const sectionStore = useAppStore()
  
  const toggleDropdown = () => {
    isVisible.value = !isVisible.value;
  };
  
  const selectOption = (option) => {
    sectionStore.setSearchQuery(option);
    isVisible.value = false;
  };
  </script>
  