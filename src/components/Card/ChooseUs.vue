<template>
    <div>
      <div class="bg-choose-us-background bg-cover h-[610px] bg-no-repeat bg-center pb-10 relative z-50 lg:mt-[-0px]">
        <div class="text-heading-secondary font-bold text-[28px] sm:text-[36px] text-center">
          <div class="pt-[50px] lg:pt-[120px] font-bold"> Why choose us?</div>
        </div>
      </div>
      <div class="flex justify-center -mt-[450px] lg:-mt-[301px] relative z-50">
        <div class="choose-grid">
          <div v-for="option in options" :key="option.title">
            <ChooseUsCard
              :title="option.title"
              :backgroundImage="option.image"
              :back="option.back"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ChooseUsCard from "@/components/Card/ChooseUsCard.vue"; 
  import settings from "@/assets/set.png"; 
  import Headset from "@/assets/Headset.png"; 
  import Price from "@/assets/Price.png"; 
  import Experience from "@/assets/experience.png"; 
  
  const options = [
    {
      title: "Quality Assurance",
      image: settings,
      back:
        "We conduct thorough and meticulous inspections of every component and product, striving to eliminate any possibility of quality issues. Our goal is to ensure that our customers receive only the highest quality products, free from defects and exceeding their expectations."
    },
    {
      title: "Good Service",
      image: Headset,
      back:
        "We are committed to providing exceptional customer service by guaranteeing a response to all inquiries within 8 hours. Additionally, our dedicated service engineers are available 24/7, ensuring that expert support is always on standby to address any issues or concerns promptly and efficiently."
    },
    {
      title: "Price Advantage",
      image: Price,
      back:
        "Experience the benefits of factory direct sales with us. By cutting out the middleman, we ensure that you receive the best prices. This means you get high-quality products at the most competitive and transparent prices available."
    },
    {
      title: "Rich Experience",
      image: Experience,
      back:
        "Our products have a broad distribution network, reaching over 20 provinces, cities, and autonomous regions across China. In addition to our extensive domestic presence, we are proud to export our products to numerous countries throughout Africa and Southeast Asia."
    }
  ];
  </script>
  
