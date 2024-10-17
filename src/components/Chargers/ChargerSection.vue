<template>
    <div>
      <div class="charger-background pb-[40px] sm:pb-[85px]">
        <div class="bg-chargers-background bg-no-repeat bg-cover bg-center">
          <div class="flex justify-center items-center flex-col gap-8 text-center">
            <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center mt-[65px]">
              EV Chargers (Commercial Chargers)
            </p>
            <p class="max-w-[760px] text-address-text-color text-[16px] font-medium mb-10 p-4">
              Our cutting-edge electric vehicle chargers are Fast, reliable, and
              hassle-free, they ensure you are always powered up and ready to go,
              wherever your journey may lead.
            </p>
          </div>
  
          <div class="flex flex-col lg:flex-row justify-center items-end relative px-5 sm:px-10">
            <div class="p-0 lg:p-4 m-auto lg:m-0 text-center lg:text-left">
              <img src="@/assets/carcharging.png" alt="Charger Icon" class="hidden lg:block" />
              <br />
              <p class="text-heading-secondary font-semibold text-[20px] sm:text-[30px]">
                Fast Charging Technology
              </p>
              <br />
              <p class="text-address-text-color font-medium max-w-[700px] text-[16px]">
                Experience the future of electric vehicle charging with our advanced
                fast charging technology. Designed to minimize charging time to
                approximately less than 2 hours without compromising on safety or
                efficiency, our chargers deliver unparalleled performance for electric
                vehicle owners.
              </p>
            </div>
            <div class="-mb-5 hidden lg:block">
              <img src="@/assets/electric-car-charger.png" alt="EV charger" />
            </div>
            <div class="p-4 lg:text-right text-center">
              <div class="flex justify-end">
                <img src="@/assets/carcharging.png" alt="Charger Icon" class="hidden lg:block" />
              </div>
              <br />
              <p class="text-heading-secondary font-semibold text-[20px] sm:text-[30px]">
                Quality Chargers for Every Need
              </p>
              <br />
              <p class="text-address-text-color font-medium lg:max-w-[700px] text-[16px]">
                Explore our range of high-quality electric vehicle chargers designed to
                meet diverse needs. From 3.5kW home chargers to powerful commercial
                solutions, we offer reliable and efficient charging options to keep
                your electric vehicle ready for the road. Enjoy the convenience and
                peace of mind with our top-tier charging solutions, ensuring your
                vehicle is always charged and ready to go.
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="h-[650px] overflow-clip relative" ref="numberRef">
        <div
          class="absolute inset-0 z-0 bg-commericial-background w-full h-full bg-cover bg-no-repeat bg-center 
        transition-transform duration-500 ease-in-out transform hover:scale-110"
        ></div>
        <div class="relative z-10 p-4 pl-[4.5vw] text-right flex justify-end items-end flex-col pr-[20px] sm:pr-[60px]">
          <div class="text-[#E66C35] text-[28px] sm:text-[50px] font-extrabold sm:text-nowrap text-right">
            COMMERCIAL CHARGERS
          </div>
          <div class="text-[#E66C35] font-medium max-w-[500px]">
            Charge your vehicles at a faster rate with our DC chargers
          </div>
        </div>
        <div class="absolute z-10 bottom-0 right-0 pr-[20px] sm:pr-[60px]">
          <div class="text-[#E66C35] text-[28px] sm:text-[50px] font-extrabold flex gap-5">
            POWER: 22 kW+ <br />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  </script>
  
  