<template>
    <div>
      <div class="flex justify-between flex-col lg:flex-row items-center py-6 px-[5vw] bikes-background">
        <div>
          <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center lg:text-left">
            Buses
          </p>
          <p class="text-address-text-color text-[16px] font-medium max-w-[700px] text-center lg:text-left px-2 pb-8 lg:pb-0">
            Leading the way in sustainable public transport, our electric buses offer an efficient and eco-friendly alternative for communities. With advanced technology and superior maintenance, they provide a reliable and cost-effective solution for urban transportation.
          </p>
        </div>
  
        <div>
          <div class="border rounded-[80px] overflow-clip">
            <div class="p-[25px] bg-card-background">
              <img
                :src="busMain"
                alt="Bus electric"
                class="w-[80vw] h-[80vw] sm:min-w-[400px] sm:min-h-[400px] sm:w-[450px] sm:h-[450px] rounded-[80px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div class="h-[550px] overflow-clip relative" ref="numberRef">
        <div class="absolute inset-0 z-0 bg-bus-background w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform hover:scale-110"></div>
        <div class="relative z-10 p-4 pl-[4.5vw]">
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold">Electric Buses</div>
          <div class="text-white font-medium max-w-[500px]">
            Built with legendary quality, innovation & performance.
          </div>
        </div>
        <div class="absolute z-10 bottom-0 right-0 pr-[60px]">
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold flex gap-5">
            RANGE:
        250 kM
            <br />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import busMain from '@/assets/bus-small.jpg'; 
  const numberRef = ref(null);
 
  

  </script>
  
