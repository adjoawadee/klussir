<script setup lang="ts">
    type AnchorLinks = {
        name: string, 
        anchor: string
    }; 
    const links= ref<AnchorLinks[]>([
        { name: 'Diensten', anchor: '#diensten'},
        { name: 'Tarieven', anchor: '#tarieven'}, 
        { name: 'Over ons', anchor: '#over-ons'}
    ])
</script>
<template>
    <nav class="items-center justify-between hidden space-x-8 lg:ml-16 lg:flex">
        <span class="transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-100 duration-200" v-for="link in links" :key="link.name">
            <NavigationLink :name="link.name" :anchor="link.anchor"></NavigationLink>
        </span>
        <CtaButton></CtaButton>
    </nav>
</template>