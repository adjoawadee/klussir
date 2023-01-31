<script setup lang="ts">
defineProps<{
    name:string,
    anchor?:string
}>()
</script>
<template>
    <NuxtLink  class="text-base text-neutral-900 hover:text-amber-500 font-medium"
        :to="{path: '/', hash:anchor }">
        <span >
            {{name}}
        </span>
    </NuxtLink>
</template>