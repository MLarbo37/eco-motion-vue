<template>
    <div>
      <video
        :autoplay="autoplay"
        controls
        :src="video"
        muted
        :loop="loop"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script setup>
  defineProps({
    video: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  
  