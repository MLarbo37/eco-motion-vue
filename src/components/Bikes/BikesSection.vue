<template>
    <div class="bikes-background">
      <div class="bg-bikes-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-[5vw] py-6">
        <div class="text-center flex justify-center items-start flex-col">
          <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center flex justify-center items-center m-auto mt-14">
            Electric bikes
          </p>
          <br />
          <p class="text-address-text-color text-[16px] font-medium max-w-[700px] text-center mb-14">
            Optimize your delivery and courier needs with our efficient electric bikes. Perfect for urban environments, they provide a swift, eco-friendly solution that minimizes your carbon footprint while maximizing reliability.
          </p>
        </div>
        <div class="border rounded-[80px] overflow-clip">
          <div class="p-[25px] bg-card-background">
            <img
              :src="Bike"
              alt="Electric Bike"
              class="w-[80vw] h-[80vw] sm:min-w-[400px] sm:min-h-[400px] sm:w-[450px] sm:h-[450px] rounded-[80px] object-cover"
            />
          </div>
        </div>
      </div>
  
      <div class="h-[550px] overflow-clip relative" ref="numberRef">
        <div
          class="absolute inset-0 z-0 bg-bike-vect-image w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform hover:scale-110"
        ></div>
        <div class="relative z-10 p-4 pl-[4.5vw]">
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold">
            ELECTRIC SCOOTER
          </div>
          <div class="text-white font-medium max-w-[500px]">
            Built with legendary quality, innovation, and performance
          </div>
        </div>
        <div class="absolute z-10 bottom-0 right-0 pr-[60px]">
          <div class="text-white text-[28px] sm:text-[50px] font-extrabold flex gap-5">
            RANGE:
         120
            kM <br />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Bike from '../../assets/electric-bike.webp';
  
  export default {
    setup() {
      return {
        Bike,
      };
    },
  };
  </script>
  
