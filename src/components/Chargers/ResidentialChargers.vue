<template>
    <div>
      <div class="charger-background pb-[40px] sm:pb-[85px]">
        <div class="bg-chargers-background bg-no-repeat bg-cover bg-center">
          <div class="flex justify-center items-center flex-col gap-8 text-center">
            <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center mt-[65px]">
              EV Chargers (Residential)
            </p>
            <p class="max-w-[760px] text-address-text-color text-[16px] font-medium mb-10 p-4">
              Residential chargers are designed to efficiently charge electric
              vehicles by delivering up to 7 kilowatts of power. This medium to
              high-speed charging solution is well-suited for both residential and
              commercial settings, offering a balance between fast charging and
              energy efficiency. Utilizing a standard Level 2 charging protocol, a
              7kW charger ensures compatibility with a wide variety of electric
              vehicle models available today, making it a versatile choice for EV
              owners looking to recharge conveniently at home or work.
            </p>
          </div>
  
          <div class="flex flex-wrap justify-evenly items-center">
            <img
              src="@/assets/ac1.jpg"
              alt="PowerStation Oukitel"
              class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px] mb-2"
            />
            <img
              src="@/assets/charger2.png"
              alt="PowerStation Oukitel"
              class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px] mb-2"
            />
            <img
              src="@/assets/charger1.jpg"
              alt="PowerStation Oukitel"
              class="object-cover w-[85vw] h-[65vw] sm:w-[384px] sm:h-[362px] mb-2"
            />
          </div>
        </div>
      </div>
  
      <div class="h-[550px] overflow-clip relative" ref="numberRef">
        <div
          class="absolute inset-0 z-0 bg-charger-background w-full h-full bg-cover bg-no-repeat bg-center 
          transition-transform duration-500 ease-in-out transform hover:scale-110"
        ></div>
        <div
          class="relative z-10 p-4 pl-[4.5vw] text-right flex justify-end items-end flex-col pr-[20px] sm:pr-[60px]"
        >
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold sm:text-nowrap text-right">
            HOME CHARGER
          </div>
          <div class="text-white font-medium max-w-[500px]">
            Enjoy the convenience of charging your electric vehicle at your
            leisure while maintaining complete control over the process
          </div>
        </div>
        <div class="absolute z-10 bottom-0 right-0 pr-[20px] sm:pr-[60px]">
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold flex gap-5">
            POWER:
           7 kW
            <br />
          </div>
        </div>
      </div>
    </div>
  </template>  
  <script setup>  </script>
