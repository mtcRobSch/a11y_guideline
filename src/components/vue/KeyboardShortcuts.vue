
<template>
  <div class="flex flex-col">
    <div class="flex flex-row font-bold">
      <div class="w-1/2">Tastenkombination</div>
      <div class="w-1/2">Funktion</div>
    </div>
    <div v-for="(shortcut, index) in keyboardShortcuts" :key="index" class="flex flex-row">
      <div class="w-1/2">{{ shortcut.combination }}</div>
      <div class="w-1/2">{{ shortcut.function }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyboardShortcuts: [
        { combination: 'Strg + C', function: 'Kopieren' },
        { combination: 'Strg + X', function: 'Ausschneiden' },
        { combination: 'Strg + V', function: 'Einfügen' },
      ]
    };
  }
};
</script>
