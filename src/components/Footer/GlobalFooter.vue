<template>
    <div class="bg-footer-primary-color text-white flex justify-evenly items-center text-left py-12 lg:-ml-[15vw] flex-col lg:flex-row gap-10 lg:gap-0">
      <div class="flex justify-between flex-col gap-10">
        <div>
          <img :src="logo" alt="logo white" class="w-[130px] object-cover" />
        </div>
  
        <p class="hidden lg:block">&copy; {{ currentYear }}. All rights reserved</p>
      </div>
  
      <div class="roboto-font font-normal flex flex-col gap-4 -ml-14 lg:ml-0">
        <p class="text-[21px]">Information</p>
        <ul class="underline text-[15px]">
          <li>Partnership</li>
          <li>Privacy Policy</li>
          <li>Imprint</li>
        </ul>
      </div>
  
      <div class="roboto-font font-normal flex flex-col gap-4 -mt-4">
        <p class="text-[21px]">Training Academy</p>
        <ul class="underline text-[15px]">
          <li>Our Training Environment</li>
          <li>News and Events</li>
        </ul>
      </div>
  
      <p class="block lg:hidden mt-8">&copy; {{ currentYear }}. All rights reserved</p>
    </div>
  </template>
  
  <script setup>
  
  import logo from '@/assets/eco-logo-small.png';
  const currentYear = new Date().getFullYear();
  </script>