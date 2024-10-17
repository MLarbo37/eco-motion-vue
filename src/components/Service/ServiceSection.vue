<template>
    <div class="gallery-background">
      <div class="bg-about-background-image bg-center bg-cover bg-no-repeat">
        <div class="flex justify-center items-center">
          <div class="flex flex-wrap gap-9 mt-[40px] pb-3 justify-center items-center">
            <div
              v-for="(service, index) in serviceDetails"
              :key="service.title"
              @click="sectionStore.scrollToSection(reference[index])"
            >
              <ServiceCard :title="service.title" :backgroundImage="service.background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import CarBackground from '@/assets/tesla-x.png';
  import ElectricVehicle from '@/assets/Charger-image.jpg';
  import PowerStations from '@/assets/oukitel-services.webp';
  import MaintenanceImage from '@/assets/Maintenance-image.jpg';
import { useAppStore } from '../../stores/mainStore';
import ServiceCard from '../Card/ServiceCard.vue';
  
 defineProps({
    reference: {
      type: Array,
      required: true,
    },
  });
  
  const sectionStore  = useAppStore() 

  const serviceDetails = [
    {
      title: 'Sales of electric vehicles',
      background: CarBackground,
    },
    {
      title: 'Maintenance of Electric Vehicles',
      background: MaintenanceImage,
    },
    {
      title: 'Installation of EV chargers',
      background: ElectricVehicle,
    },
    {
      title: 'Sales of Power stations',
      background: PowerStations,
    },
  ];
  </script>
  
  