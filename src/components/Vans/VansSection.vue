<template>
    <div>
      <div class="flex flex-col sm:flex-row justify-evenly mt-[72px]">
        <div class="flex flex-col gap-2 justify-center px-6">
          <p class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-left van-heading">
            Vans & Trucks
          </p>
          <p class="text-address-text-color text-[16px] font-medium max-w-[639px] text-left van-text">
            Our electric vans and trucks are built for the future, offering zero-emission solutions for both passenger transport and goods delivery. Equipped with cutting-edge technology, they ensure efficient, eco-friendly, and cost-effective transportation.
          </p>
        </div>
        <div>
          <img
            :src="vanMain"
            alt="van"
            class="w-[634px] h-[423px] hide-van"
          />
        </div>
      </div>
  
      <div class="mt-[72px] flex flex-wrap justify-evenly items-center mb-3">
        <div
          v-for="(van, index) in vanCharacteristics"
          :key="index"
          class="max-w-[408px]"
        >
          <img
            :src="van.image"
            alt="Bus"
            class="h-[400px] object-cover"
          />
          <div>
            <p class="text-[#475467] font-semibold mt-[15px] px-2">
              {{ van.Title }}
            </p>
            <p class="text-[#475467] font-normal px-2">
              {{ van.importance }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import vanMain from '@/assets/farizon.jpg';
  import BusSecondImage from '@/assets/with items.png';
  import BusThirdImage from '@/assets/24.png';
  import BusFourthImage from '@/assets/deliver24.png';
  
  export default {
    setup() {
      const vanCharacteristics = [
        {
          image: BusSecondImage,
          Title: "Sustainable Transportation",
          importance: "Promotes environmental responsibility by utilizing clean energy.",
        },
        {
          image: BusThirdImage,
          Title: "Quiet Operation",
          importance: "Reduces noise pollution, making them ideal for urban and residential areas.",
        },
        {
          image: BusFourthImage,
          Title: "Long-Range Capability",
          importance: "Designed to cover significant distances on a single charge, ensuring reliable deliveries and transport.",
        },
      ];
  
      return {
        vanMain,
        vanCharacteristics,
      };
    },
  };
  </script>
