<template>
  <div>
    <div class="bg-electric-vehicle-background bg-cover bg-no-repeat bg-center flex flex-col-reverse lg:flex-row justify-between items-center pt-20 px-[5vw] py-16">
      <div class="border rounded-[80px] overflow-clip">
        <div class="p-[15px] sm:p-[25px] bg-card-background">
          <img
            :src="audiElectric"
            alt="Audi Electric"
            class="w-[80vw] h-[80vw] sm:min-w-[400px] sm:min-h-[400px] sm:w-[450px] sm:h-[450px] rounded-[80px]"
          />
        </div>
      </div>
      <div class="w-full lg:max-w-[50%]">
        <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center lg:text-right">
          Electric cars
        </p>
        <p class="text-address-text-color text-[16px] font-medium text-center lg:text-right pb-5 lg:pb-0">
          Step into a new era of driving with our state-of-the-art electric cars. Designed to combine
          sleek aesthetics with advanced technology, they offer a zero-emission alternative that
          doesn’t compromise on performance. Say goodbye to fossil fuels and hello to a cleaner,
          greener future.
        </p>
      </div>
    </div>

    <div class="h-[550px] overflow-clip relative" ref="numberRef">
      <div
        class="absolute inset-0 z-0 bg-interior-background w-full h-full bg-cover bg-no-repeat bg-center 
        transition-transform duration-500 ease-in-out transform hover:scale-150"
      ></div>
      <div class="relative z-10 p-4 pl-[4.5vw]">
        <div class="text-white text-[28px] sm:text-[50px] font-extrabold">THE HAN</div>
        <div class="text-white font-medium">
          An instrument of sheer luxury, power and safety
        </div>
      </div>
      <div class="absolute z-10 bottom-0 right-0 pr-[60px]">
         <span class="text-white text-[50px] font-black">456 kM</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AudiElectric from '../../assets/audi.jpg';

const audiElectric = AudiElectric;
const numberRef = ref(null);
</script>
