<template>
    <div class="mt-[66px] overflow-clip gallery-background">
      <div class="relative">
        <p class="text-[35px] sm:text-[40px] whitespace-nowrap lg:text-[6vw] font-black z-10 absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OUR SERVICES
        </p>
        <img
          :src="serviceImage"
          alt="services"
          class="w-[100vw] h-60vh lg:h-[90vh] object-cover"
        />
      </div>
  

      <div class="relative">
        <ServiceSection :reference="serviceRefs" />
      </div>
  
      <div ref="salesRef">
        <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center my-5">
          Sale of electric cars
        </p>
        <p class="text-center max-w-[100vw] lg:max-w-[900px] m-auto mb-16 text-address-text-color">
          Discover the future of eco-friendly transportation with Eco Motion. Our cutting-edge lineup of electric vehicles combines sleek design with advanced technology to redefine your driving experience.
        </p>
      </div>
  
      <div class="w-[90vw] lg:w-[50vw] justify-center items-center m-auto">
        <VideoSection video="/BMW.mp4" />
      </div>
  
      <div class="mt-20" ref="maintenanceRef">
        <div>
          <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center my-5">
            Maintenance of <br /> electric vehicles
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-between px-[6vw]">
          <div class="max-w-full lg:max-w-[50%] justify-center items-center text-address-text-color m-auto text-center lg:text-left">
            <p>
              At Eco Motion, we ensure peace of mind with our comprehensive maintenance services, offering regular maintenance checks, battery diagnostics, and software updates.
            </p>
          </div>
          <img
            :src="maintenanceImage"
            alt="maintenance image"
            class="w-[510px] h-[335px] object-cover"
          />
        </div>
      </div>
  
      <div class="w-[90vw] lg:w-[100vw] flex justify-center items-center m-auto py-20">
        <VideoSection video="/maintenaceVid.mp4" />
      </div>
  
      <div ref="chargersRef">
        <div>
          <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center my-5">
            Installation of Electric <br /> vehicles chargers
          </p>
        </div>
        <div class="flex flex-col lg:flex-row-reverse gap-4 justify-between px-[6vw] mb-[80px] lg:mb-0">
          <div class="max-w-full lg:max-w-[50%] justify-center items-center text-address-text-color m-auto text-center lg:text-left">
            <p>
              We provide advanced AC and DC charging solutions to meet the diverse needs of EV drivers, ensuring reliable and efficient charging.
            </p>
          </div>
          <div class="w-full lg:min-w-[34vw] lg:max-w-[34vw] lg:h-[335px] object-cover">
            <VideoSection video="/charger-video.mp4" :autoplay="true" :loop="true" />
          </div>
        </div>
      </div>
  
      <div class="w-[90vw] lg:w-[100vw] flex justify-center items-center m-auto py-20">
        <VideoSection video="/ChargerInstallation.mp4" />
      </div>
  
      <div ref="powerStationRef">
        <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center my-5">
          Sale of Power stations
        </p>
        <p class="text-center max-w-[100vw] lg:max-w-[900px] m-auto mb-16 text-address-text-color px-4">
          We proudly offer portable power stations from top brands like EcoFlow and Oukitel, designed to empower your outdoor adventures and emergency preparedness.
        </p>
      </div>
  
      <div class="flex flex-wrap gap-4 justify-evenly items-center">
        <img
          :src="powerStationOukitel"
          alt="PowerStation Oukitel"
          class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px]"
        />
        <img
          :src="powerStationSecond"
          alt="PowerStation Oukitel"
          class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px]"
        />
        <img
          :src="powerStationThird"
          alt="PowerStation Oukitel"
          class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px]"
        />
      </div>
  
      <div class="w-[90vw] lg:w-[50vw] justify-center items-center m-auto py-20">
        <VideoSection video="/OukitelPower.mp4" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import serviceImage from '@/assets/mechanic-fixing-car-tyre.png';
  import maintenanceImage from '@/assets/Maintenance-image.jpg';
  import powerStationOukitel from '@/assets/oukitel.webp';
  import powerStationSecond from '@/assets/ecoflow wallpaper2.jpeg';
  import powerStationThird from '@/assets/oukitel-services.webp';
import VideoSection from '../components/Video/VideoSection.vue';
import ServiceSection from '../components/Service/ServiceSection.vue';
  
  const salesRef = ref(null);
  const maintenanceRef = ref(null);
  const powerStationRef = ref(null);
  const chargersRef = ref(null);
  
  const serviceRefs = [salesRef, maintenanceRef, chargersRef, powerStationRef];
  </script>
  
