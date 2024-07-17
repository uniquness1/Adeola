<template>
  <div class="flex items-center gap-4">
    <input
      @click="toggleDark"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox hidden"
      :class="{ 'dark-mode': isDark }"
    />
    <label for="checkbox" class="switch-label">
      <span
        v-if="isDark"
        class="moon block cursor-pointer text-yellow-300 text-2xl"
      >
        <i class="fa-solid fa-sun"></i>
      </span>
      <span v-else class="sun cursor-pointer block text-2xl">
        <i class="fa-solid fa-moon"></i>
      </span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': isDark }"
      ></div>
    </label>
  </div>
</template>

<script setup></script>
