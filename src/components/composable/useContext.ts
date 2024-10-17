import { ref, type Ref } from 'vue';
type SectionRef = Ref<HTMLDivElement | null>;

export function useContext() {
  const section = ref('Home');
  const homeLinkRef = ref(null);
  const electricLinkRef = ref(null);
  const servicesLinkRef = ref(null);
  const powerStationLinkRef = ref(null);
  const bikesLinkRef = ref(null);
  const chargersLinkRef = ref(null);
  const busLinkRef = ref(null);
  const trucksLinkRef = ref(null);
  const searchQuery = ref('');

  const scrollToSection = (sectionRef:SectionRef) => {
    if (sectionRef?.value !== null) {
      sectionRef.value.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setSection = (newSection:string) => {
    section.value = newSection;
  };

  const setSearchQuery = (query:string) => {
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
}
