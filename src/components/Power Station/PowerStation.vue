<template>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center py-6 px-[5vw] bikes-background mt-[66px] overflow-clip">
      <div class="px-4">
        <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-left">
          Power station (Oukitel)
        </p>
        <p class="text-address-text-color text-[16px] font-medium max-w-[700px] text-left">
          Eco Motion is committed to transforming the transportation sector with innovative and sustainable electric mobility solutions. In addition to our electric vehicle, we now offer advanced Oukitel power stations that harness renewable energy, providing eco-friendly power alternatives. Our aim is to lead the way towards a greener, more sustainable future by integrating cutting-edge technology and environmentally conscious practices in all our products.
        </p>
      </div>
  
      <div>
        <div class="border rounded-[80px] overflow-clip">
          <div class="p-[25px] bg-card-background">
            <img
              :src="powerStationImage"
              alt="Audi Electric"
              class="w-[80vw] h-[80vw] sm:min-w-[400px] sm:min-h-[400px] sm:w-[450px] sm:h-[450px] rounded-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  
    <div class="h-[550px] overflow-clip relative" ref="numberRef">
      <div
        class="absolute inset-0 z-0 bg-power-station-background w-full h-full bg-cover bg-no-repeat bg-center 
        transition-transform duration-500 ease-in-out transform hover:scale-110"
      ></div>
      <div class="relative z-10 p-4 pl-[4.5vw]">
        <div class="text-white text-[28px] sm:text-[50px] font-extrabold">
          OUKITEL POWER STATION
        </div>
        <div class="text-white font-medium max-w-[500px]">
          Reliable Home backup emergency power
        </div>
      </div>
      <div class="absolute z-10 bottom-0 right-0 pr-[60px]">
        <div class="text-white text-[28px] sm:text-[50px] font-extrabold flex gap-5">
          POWER: <span>2</span> kW +<br />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import powerStationImage from '@/assets/oukitel.webp';
  

  
  
 
  </script>
 