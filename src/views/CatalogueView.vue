<template>
    <div class="mt-[66px]">
      <div>
        <div class="relative">
          <p class="text-[35px] sm:text-[40px] whitespace-nowrap lg:text-[6vw] font-black z-10 absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            CATALOGUE
          </p>
          <img
            :src="CatalogueImage"
            alt="catalogue"
            class="w-[100vw] h-60vh lg:h-[90vh] object-cover"
          />
        </div>
  
        <div class="w-[70vw] lg:flex border gap-4 lg:w-[660px] p-4 rounded-3xl m-auto shadow-custom -mt-9 z-30 relative bg-white">
          <input
            type="text"
            placeholder="Search"
            class="w-[100%] py-1 mb-2 lg:mb-0 lg:py-0 lg:w-[478px] outline-none rounded-lg border-[2px] pl-4"
            v-model="sectionStore.searchQuery"
            @input="handleSearchChange"
          />
          <CustomDropDown />
        </div>
  
        <div class="flex flex-wrap gap-8 my-4 sm:px-8 justify-evenly">
          <div v-for="data in filteredData" :key="data.image" @click="setSelectData(data)">
            <CatalogueCard
              :data="data"
              @click="setSelectData(data)"
              :setOpenDialog="setOpenDialog"
            />
          </div>
        </div>
      </div>
  
      <div v-if="filteredData.length === 0" class="text-center m-auto py-3 pb-10 text-[28px] text-[rgb(116,112,136)]">
        No item found 😢. Contact us to make a request on your searched vehicle
      </div>
  
      <ViewMore v-if="openDialog" :data="selectedData" :setOpenDialog="setOpenDialog" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
import { useAppStore } from '../stores/mainStore';
import ViewMore from '../components/View more/ViewMore.vue';
import CatalogueCard from '../components/Card/CatalogueCard.vue';
import CustomDropDown from '../components/Custom Drop Down/CustomDropDown.vue';
import { Data } from '../components/Catalogue Data/Data';
import CatalogueImage from  '@/assets/catalogue.jpg'
  const selectedData = ref({});
  const openDialog = ref(false);
  const sectionStore = useAppStore();
  
  const handleSearchChange = (e) => {
    const target = e.target;
    sectionStore.setSearchQuery(target.value);
  };
  
  const filteredData = computed(() => 
    Data.filter(item =>
      item.brand.toLowerCase().includes(sectionStore.searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(sectionStore.searchQuery.toLowerCase())
    )
  );
  
  const setSelectData = (data) => {
    selectedData.value = data;
    openDialog.value = true;
  };

  const setOpenDialog=()=>{
    openDialog.value = false
  }
  
  </script>
  