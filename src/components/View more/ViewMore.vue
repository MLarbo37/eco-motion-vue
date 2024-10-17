<template>
    <div
      class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm z-[800]"
      @click="setOpenDialog(false)"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        @click.stop
      >
        <div class="bg-white w-[600px] h-[700px] rounded-lg relative overflow-y-scroll viewMore__container">
          <div class="pb-4"></div>
          <div
            class="right-0 mr-2 absolute bg-black p-1 rounded-full cursor-pointer"
            @click="setOpenDialog(false)"
          >
            <img :src="closeImage" alt="close icon" class="w-[12px]" />
          </div>
  
          <div class="bg-interior-view-background gap-2 bg-cover w-[95%] py-2 lg:h-[200px] lg:py-0 flex flex-wrap justify-evenly items-center rounded-lg px-6 mx-auto">
            <img
              :src="data.image"
              :alt="data.name"
              class="rounded-lg h-[160px]"
              width="200"
              height="30"
            />
            <img
              :src="data.interior"
              :alt="data.interior"
              class="rounded-lg h-[160px]"
              width="200"
              height="200"
            />
          </div>
  
          <div class="px-4">
            <p class="font-semibold mt-2 text-[22px]">
              {{ data.brand }} {{ data.name }}
            </p>
  
            <div v-for="(value, key) in filteredData" :key="key" class="flex justify-between py-2 data_view">
              <div class="text-[rgb(116,112,136)]">{{ key }}</div>
              <div class="font-medium">{{ value }}</div>
            </div>
  
            <div>
              <p class="pt-2 font-bold">Features</p>
              <ul v-for="feature in data.features" :key="feature" class="markerUnique list-inside text-[rgb(116,112,136)] py-1">
                <li>{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {  defineProps, computed } from 'vue';
  import closeImage from '@/assets/close.png';
  
  const props = defineProps({
    data: Object,
    setOpenDialog: Function
  });
  
  const filteredData = computed(() => {
    const excludeKeys = ['brand', 'features', 'name', 'image', 'interior'];
    return Object.entries(props.data).reduce((acc, [key, value]) => {
      if (!excludeKeys.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  });
  </script>
  