<template>
    <div class="h-[66px] bg-black bg-opacity-50 backdrop-blur-sm flex justify-between items-center fixed top-0 w-[100vw] z-[150] shadow-lg">
      <div
        class="font-bold text-heading-secondary flex justify-center items-center cursor-pointer ml-5"
        @click="sectionStore.setSection('Home')"
      >
        <img :src="Logo" alt="logo" class="w-[130px] object-cover" />
      </div>
  
      <div class="hidden lg:flex justify-evenly items-center w-3/4 ">
        <div
          v-for="tab in tabs"
          :key="tab.name || tab[0]?.name"
          class="text-white cursor-pointer font-semibold text-sm"
        >
          <div v-if="!Array.isArray(tab)">
            <span
              :class="section === tab.name ? 'text-secondary-color font-semibold' : 'text-white'"
              @click="sectionStore.setSection(tab.name)"
            >
              {{ tab.name }}
            </span>
          </div>
          <div v-else>
            <div class="text-white cursor-pointer font-semibold text-sm flex items-center gap-3" @click="toggleVisibility">
              Products
              <img :src="DropDown" alt="drop down" width="12" height="12" class="mt-0.5" />
            </div>
            <div v-if="isVisible" class="absolute shadow-lg bg-black bg-opacity-50 w-[160px] pl-2 pt-4 permitMain">
              <div v-for="dropDown in tab" :key="dropDown.name" class="relative">
                <div class="text-white cursor-pointer font-semibold text-sm pb-4 permitSub justify-between flex items-center gap-3 relative pr-3">
                  {{ dropDown.name }}
                  <img v-if="dropDown.next" :src="rightArrow" alt="rightArrow" class="w-[12px]" />
              
                <div v-if="dropDown.next" class="absolute ml-[151px] w-[160px] bg-black bg-opacity-50 pl-[10px] shadow-sm showSub top-0">
                  <div v-for="subitem in dropDown.next" :key="subitem.name"  :class="section == subitem.path ? ' py-1 text-[#E66C35]':'py-1 text-[#fff]'" @click="()=> [sectionStore.setSection(subitem.path) , toggleVisibility()]">
                    {{ subitem.name }}
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="lg:hidden flex items-center mr-5 z-[600]">
        <img :src="isMenuOpen ? CloseIcon : HamburgerIcon" alt="menu" width="30" height="30" class="cursor-pointer" @click="toggleMenu" />
      </div>
  
      <div v-if="isMenuOpen" class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-90 z-[510] flex flex-col items-center pt-10 overflow-y-auto phoneMain">
        <div
          v-for="tab in tabs"
          :key="tab.name || tab[0]?.name"
          class="text-white cursor-pointer font-semibold text-lg py-2"
          @click="handleMenuClick(tab)"
        >
          <span v-if="!Array.isArray(tab)">{{ tab.name }}</span>
          <div v-else class="relative w-full flex flex-col items-center">
            <div class="flex items-center gap-3" @click="toggleVisibility">
              Products
              <img :src="DropDown" alt="drop down" width="12" height="12" />
            </div>
            <div v-if="isVisible" class="w-full flex flex-col items-center transition-all duration-500 ease-in-out">
              <div v-for="dropDown in tab" :key="dropDown.name" class="w-full flex flex-col items-center py-2 ">
                <span>{{ dropDown.name }}</span>
                <div v-if="dropDown.next" class="mt-2">
                  <div v-for="subitem in dropDown.next" :key="subitem.name" class="py-1 text-[#fff]" @click="[sectionStore.setSection(subitem.path)]"  >
                    {{ subitem.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  import Logo from '@/assets/eco-logo-small.png';
  import DropDown from '@/assets/down-arrow.png';
  import HamburgerIcon from '@/assets/menu.png';
  import CloseIcon from '@/assets/close.png';
  import rightArrow from '@/assets/right-arrow.png';
  import { useAppStore } from '@/stores/mainStore';
  import { storeToRefs } from 'pinia';
  
  const isVisible = ref(false);
  const isMenuOpen = ref(false);
  
  const sectionStore = useAppStore();
  const { section,  electricLinkRef, bikesLinkRef, trucksLinkRef, busLinkRef } = storeToRefs(sectionStore)
  const router = useRouter();
  const route = useRoute();
  const tabs = [
    { name: 'Home', path: '' },
    [
      {
        name: 'Electric Vehicles',
        next: [
          { name: 'Cars', path: 'Electric cars' },
          { name: 'Motorbikes', path: 'Electric bikes' },
          { name: 'Vans and Trucks', path: 'Electric trunk' },
          { name: 'Buses', path: 'Electric buses' }
        ]
      },
      {
        name: 'Power stations',
        next: [
          { name: 'Oukitel', path: 'Power stations' },
          { name: 'Ecoflow', path: 'Power stations ecoflow' }
        ]
      },
      {
        name: 'EV chargers',
        next: [
          { name: 'Residential', path: 'Electric chargers' },
          { name: 'Commercial', path: 'Electric chargerss' }
        ]
      }
    ],
    { name: 'Our services', path: 'services' },
    { name: 'Catalogue', path: 'catalogue' },
  ];
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const handleMenuClick = (tab) => {
    if (!Array.isArray(tab)) {
      sectionStore.setSection(tab.name);
      isMenuOpen.value = false;
    }
  };
  
  watch(()=>section.value, (newSection) => {
    if (newSection === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      router.push('/');
    } else if (newSection === 'Electric cars') {
      route.path !== '/' && router.push('/');
      sectionStore.scrollToSection(electricLinkRef);
    } else if (newSection === 'Electric bikes') {
      route.path !== '/' && router.push('/');
      sectionStore.scrollToSection(bikesLinkRef);
    } else if (newSection === 'Electric trunk') {
      route.path !== '/' && router.push('/');
      sectionStore.scrollToSection(trucksLinkRef);
    } else if (newSection === 'Electric buses') {
      route.path !== '/' && router.push('/');
      sectionStore.scrollToSection(busLinkRef);
    } else if (newSection === 'Power stations') {
      router.push('/powerStation');
    } else if (newSection === 'Power stations ecoflow') {
      router.push('/powerStation');
    }
    else if (newSection === 'Our services') {
      router.push('/services');
    } else if (newSection === 'Catalogue') {
      router.push('/catalogue');
    } else if (newSection === 'Gallery') {
      router.push('/gallery');
    }
  },{immediate:true});
  </script>
  
  