<template>
  <div>
    <div
      :class="[
        'fixed',
        isTablet
          ? 'bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] rounded-lg flex justify-center items-center'
          : 'top-1/2 right-0 mr-2 rounded-[30px]',
        isTablet ? 'translate-y-0' : '-translate-y-1/2',
        'bg-white shadow-lg text-white p-1 z-[100] transition-transform duration-500',
        isScrolled ? (isTablet ? 'translate-y-0' : '') : isTablet ? 'translate-y-full' : ''
      ]"
    >
      <div
        :class="[
          isTablet
            ? 'flex justify-center items-center gap-5'
            : 'flex justify-center gap-3 flex-col items-center hover_control z-50'
        ]"
      >
        <div class="hover_info relative">
          <a href="tel:+233267239509" target="_blank" class="cursor-pointer">
            <img :src="Phone" alt="Phone call" class="w-[22px]" />
          </a>
          <div class="card_movement bg-white relative">
            <ContactCard
              Info="+233 26 723 9509"
              :image="Phone"
              subInfo="Let's get in touch"
              title="Hotline:"
            />
          </div>
        </div>

        <div class="hover_info">
          <a href="mailto:mlarbo37@gmail.com" class="cursor-pointer">
            <img :src="Email" alt="Email" class="w-[26px]" />
          </a>
          <div class="card_movement bg-white mt-14 mr-1">
            <ContactCard
              Info="mlarbo37@gmail.com"
              :image="Email"
              subInfo="Let's get in touch"
              title="Email:"
            />
          </div>
        </div>

        <div class="hover_info">
          <a href="https://wa.me/+233267239509" target="_blank" class="cursor-pointer">
            <img :src="Whatsapp" alt="Whatsapp" class="w-[26px]" />
          </a>
          <div class="card_movement bg-white mt-28 mr-1">
            <ContactCard
              Info="+233 26 723 9509"
              :image="Whatsapp"
              subInfo="Let's have a conversation"
              title="Whatsapp:"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Whatsapp from '@/assets/whatsapp.png'
import Phone from '@/assets/phone-call.png'
import Email from '@/assets/mail.png'
import ContactCard from '../Contact Card/ContactCard.vue'

const isScrolled = ref(false)
const isTablet = ref(false)

const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  isScrolled.value = scrollPosition > windowHeight * 0.4
}

const handleResize = () => {
  isTablet.value = window.innerWidth <= 1024
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  handleResize() // Initial check for screen size
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Add any scoped styles here if necessary */
</style>
