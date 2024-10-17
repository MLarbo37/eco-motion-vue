import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

type SectionRef = Ref<HTMLDivElement | null>;

export const useAppStore = defineStore('appStore', () => {
  const section = ref('Home');
  const homeLinkRef = ref<HTMLDivElement | null>(null);
  const electricLinkRef = ref<HTMLDivElement | null>(null);
  const servicesLinkRef = ref<HTMLDivElement | null>(null);
  const powerStationLinkRef = ref<HTMLDivElement | null>(null);
  const bikesLinkRef = ref<HTMLDivElement | null>(null);
  const chargersLinkRef = ref<HTMLDivElement | null>(null);
  const busLinkRef = ref<HTMLDivElement | null>(null);
  const trucksLinkRef = ref<HTMLDivElement | null>(null);
  const searchQuery = ref('');

  const scrollToSection = (sectionRef: SectionRef) => {
    if (sectionRef &&  sectionRef?.value !== null) {
      sectionRef.value.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const setSection = (newSection: string) => {
    section.value = newSection;
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };


  return {
    section,
    setSection,
    homeLinkRef,
    electricLinkRef,
    servicesLinkRef,
    powerStationLinkRef,
    bikesLinkRef,
    chargersLinkRef,
    busLinkRef,
    trucksLinkRef,
    scrollToSection,
    searchQuery,
    setSearchQuery,
  };
});
