<template>
  <div class="carousel" ref="carouselRef">
    <div class="list">
      <div class="item" v-for="item in carouselItems" :key="item.title">
        <img :src="item.image" alt="vw" />
        <div class="content">
          <div class="author">{{ item.author }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="topic">{{ item.topic }}</div>
          <div class="des">{{ item.des }}</div>
          <div class="button">
            <button
              class="border px-3 py-1 text-[13px] sm:text-[16px]"
              @click="navigateTo(item)"
            >
              {{ item.button }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="thumbnail">
      <div class="item" v-for="item in thumbnailItems" :key="item.title">
        <img :src="item.image" alt="thumbnail" />
        <div class="content">
          <div class="title"></div>
          <div class="des">{{ item.topic }}</div>
        </div>
      </div>
    </div>

    <div class="arrows">
      <button id="prev" @click="handlePrev">&lt;</button>
      <button id="next" @click="handleNext">&gt;</button>
    </div>

    <div class="time"></div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/mainStore';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  items: Array,
});

const sectionStore = useAppStore();
const carouselRef = ref(null);
const carouselItems = ref([]);
const thumbnailItems = ref([]);
const timeoutRef = ref(undefined);
const autoNextTimeoutRef = ref(undefined);
const timeRunning = 3000;
const timeAutoNext = 30000;

const router = useRouter();
const itemsClone = [...props.items];
const firstToLast = itemsClone.shift();
itemsClone.push(firstToLast);

onMounted(() => {
  carouselItems.value = props.items;
  thumbnailItems.value = itemsClone;

  autoNextTimeoutRef.value = setTimeout(() => {
    handleNext();
  }, timeAutoNext);
});

onBeforeUnmount(() => {
  if (autoNextTimeoutRef.value) {
    clearTimeout(autoNextTimeoutRef.value);
  }
});

const handleNext = () => {
  showSlider('next');
};

const handlePrev = () => {
  showSlider('prev');
};

const showSlider = (type) => {
  carouselItems.value = rotateItems(carouselItems.value, type);
  thumbnailItems.value = rotateItems(thumbnailItems.value, type);

  if (carouselRef.value) {
    carouselRef.value.classList.add(type);

    if (timeoutRef.value) {
      clearTimeout(timeoutRef.value);
    }

    timeoutRef.value = setTimeout(() => {
      carouselRef.value.classList.remove('next');
      carouselRef.value.classList.remove('prev');
    }, timeRunning);
  }

  if (autoNextTimeoutRef.value) {
    clearTimeout(autoNextTimeoutRef.value);
  }

  autoNextTimeoutRef.value = setTimeout(() => {
    handleNext();
  }, timeAutoNext);
};

const rotateItems = (items, type) => {
  let newItems = [...items];
  if (type === 'next') {
    newItems.push(newItems.shift());
  } else {
    newItems.unshift(newItems.pop());
  }
  return newItems;
};

const navigateTo = (item) => {
  sectionStore.setSection(item.section);
  router.push(item.path);
};
</script>

