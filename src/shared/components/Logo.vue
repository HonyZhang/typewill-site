<script setup lang="ts">
defineOptions({
  name: 'Logo'
})

withDefaults(defineProps<{
  classList?: string
}>(), {
  classList: ''
})
</script>

<template>
  <svg
    :class="classList"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M3.02563 7.5H5.58974L6.35897 9.75L8.15384 15L8.41025 16.75H8.92307L9.6923 14L10.7179 12H13.7949L15.3333 16V16.75H15.8461L16.1026 15L17.3846 11L18.4102 7.75L18.6667 7.5H21.2308L20.9744 8.75L17.1282 19.75L16.8718 21H14.5641L12.2564 15.5L11.4872 16.75L9.94871 20.75L9.6923 21H7.64102L6.61538 18.75L3.28205 8.75L3.02563 7.5Z"
        fill="currentColor"
      />
      <path
        d="M2 3H22V5.25H13.2821V9.75H10.7179V5.25H2V3Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="20"
          height="18"
          fill="white"
          transform="translate(2 3)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
