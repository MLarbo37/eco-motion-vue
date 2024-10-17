<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center py-6 px-[5vw] bikes-background mt-[66px] overflow-clip">
      <div class="px-4">
        <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-left">
          Power station (Ecoflow)
        </p>
        <p class="text-address-text-color text-[16px] font-medium max-w-[700px] text-left">
          EcoFlow power stations that leverage renewable energy to provide environmentally friendly power options. Our mission is to lead the transition to a greener, more sustainable future by incorporating innovative technology and eco-conscious practices into all our products.
        </p>
      </div>

      <div>
        <div class="border rounded-[80px] overflow-clip">
          <div class="p-[25px] bg-card-background">
            <img
              :src="PowerStationImage"
              alt="Ecoflow Power Station"
              class="w-[80vw] h-[80vw] sm:min-w-[400px] sm:min-h-[400px] sm:w-[450px] sm:h-[450px] rounded-[80px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-[550px] overflow-clip relative" ref="numberRef">
      <div
        class="absolute inset-0 z-0 bg-ecoflow-background w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform hover:scale-110"
      ></div>
      <div class="relative z-10 p-4 pl-[4.5vw]">
        <div class="text-white text-[28px] sm:text-[50px] font-extrabold">ECOFLOW POWER STATION</div>
        <div class="text-white font-medium max-w-[500px]">A game changer in the power industry</div>
      </div>
      <div class="absolute z-10 bottom-0 right-0 pr-[60px]">
        <div class="text-white text-[28px] sm:text-[50px] font-extrabold flex gap-5">
          POWER: 
       2  kW +
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import PowerStationImage from '@/assets/ecoflow.jpg';

</script>

