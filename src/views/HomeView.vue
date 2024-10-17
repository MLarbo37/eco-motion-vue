<template>
  <main class="overflow-x-hidden" ref="homeLinkRef">
    <HeroSection :items="items" />
    <AboutSection />
    <CollectionSection />
    <ChooseUs />
    <div ref="electricLinkRef">
      <EVs />
    </div>
    <div ref="bikesLinkRef">
      <BikesSection />
    </div>
    <div ref="trucksLinkRef">
      <VansSection />
    </div>
    <div ref="busLinkRef">
      <BusSection />
    </div>
  </main>
</template>

<script setup>
import {  watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import ChooseUs from '@/components/Card/ChooseUs.vue';
import EVs from '../components/Electric Vehicle/EVs.vue';
import vw from '@/assets/carRequested.png';
import id7 from '@/assets/Banner.jpg';
import id4 from '@/assets/greenc-one.webp';
import car from '@/assets/dc-fast-chargers.jpg';
import charging from '@/assets/newOukitel.jpg';
import HeroSection from '@/components/Hero/HeroSection.vue';
import AboutSection from '@/components/About/AboutSection.vue';
import CollectionSection from '@/components/Collection/CollectionSection.vue';
import { useAppStore } from '@/stores/mainStore';
import BikesSection from '@/components/Bikes/BikesSection.vue';
import VansSection from '@/components/Vans/VansSection.vue';
import BusSection from '@/components/Bus/BusSection.vue';
import { storeToRefs } from 'pinia';


const router = useRouter();

const sectionStore = useAppStore()
const { electricLinkRef, bikesLinkRef, trucksLinkRef, busLinkRef, powerStationLinkRef , chargersLinkRef} = storeToRefs(sectionStore)

const items = [
  {
    image: id7,
    author: 'BYD Tang',
    title: 'Build Your Dreams with the BYD Tang',
    topic: 'Electric Car',
    des: 'Experience the future with the BYD Tang Electric Car. Discover the power of electric driving, combining luxury, performance, and sustainability. Your journey towards a greener future starts here.',
    button: 'Explore the BYD Tang',
    path: '/catalogue',
    section: 'Catalogue'
  },
  {
    image: id4,
    author: 'Greenc',
    title: "Charge Up Your Life with Greenc's 7kW Charger",
    topic: 'Residential Charger',
    des: "Power up at home with 7kW Residential Charger. Tailored for both commercial and home use, it ensures your EV is always ready to go. Charge smarter, live greener.",
    button: 'Learn More About Our Chargers',
    path: '/chargers',
    section: 'Electric chargers'
  },
  {
    image: vw,
    author: 'Volkswagen',
    title: 'Ignite Your Journey with the Volkswagen ID.4',
    topic: 'Electric Car',
    des: 'Step into the electric era with the Volkswagen ID.4. This sleek and powerful EV redefines driving with its eco-friendly ethos and cutting-edge technology. Drive the change.',
    button: 'Discover the Volkswagen ID.4',
    path: '/catalogue',
    section: 'Catalogue'
  },
  {
    image: charging,
    author: 'Oukitel',
    title: "Power Anytime, Anywhere with Oukitel's Power Station",
    topic: 'Power Station',
    des: "Stay powered in any situation with the Oukitel 1kW+ Power Station. An essential backup that activates instantly, ensuring you’re never left in the dark. Power when you need it most.",
    button: 'Find Out More',
    path: '/powerStation',
    section: 'Power stations'
  },
  {
    image: car,
    author: 'Supercharge Your Business with Electrly’s DC Chargers',
    title: '60 -  240kW DC',
    topic: 'Commercial Charger',
    des: 'Optimize your business with Electrly’s high-efficiency DC Commercial Chargers. Designed for maximum security and efficiency, they meet your customers\' charging needs effortlessly. Empower your customers with fast, reliable charging.',
    button: 'Explore Commercial Solutions',
    path: '/chargers',
    section: 'Electric chargers'
  }
];

watchEffect(() => {
  if (sectionStore.section === "Home") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (sectionStore.section === "Electric cars") {
    sectionStore.scrollToSection( electricLinkRef);
  } else if (sectionStore.section === "Electric bikes") {
    sectionStore.scrollToSection( bikesLinkRef);
  } else if (sectionStore.section === "Power stations") {
    sectionStore.scrollToSection(powerStationLinkRef);
  } else if (sectionStore.section === "Electric chargers") {
    sectionStore.scrollToSection(chargersLinkRef);
    router.push('/chargers');
  } else if (sectionStore.section === "Electric trunk") {
    sectionStore.scrollToSection(trucksLinkRef);
  } else if (sectionStore.section === "Electric buses") {
    sectionStore.scrollToSection(busLinkRef);
  }
});
</script>
