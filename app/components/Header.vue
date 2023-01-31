<script setup lang="ts">
    const count = ref(0)
    const isOpen = ref(false);
    const handleClick = () => {
        isOpen.value = !isOpen.value;
    }
</script>
<template>
    <header class="relative z-50">
        <div class="relative pt-6 pb-6">
            <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
                <div class="flex flex-1 items-center justify-between">
                    <div class="flex w-full items-center justify-between lg:w-auto">
                        <a href="/" class="relative">
                            <LogoKlussirLogo></LogoKlussirLogo>
                        </a>
                    </div>
                    <NavigationDesktop></NavigationDesktop>
                    <div class="flex items-center lg:hidden">
                        <button @click="handleClick" class="inline-flex items-center justify-center rounded-md p-2 text-neutral-900" type="button" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition ease-in-out" :class="{'rotate-45': isOpen,' -translate-y-1.5': !isOpen }"></span>
                            <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform transition ease-in-out" :class="{'opacity-0': isOpen } "></span>
                            <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition ease-in-out" :class="{'-rotate-45': isOpen, ' translate-y-1.5': !isOpen}"></span>
                        </button>
                        <div class="overflow-hidden rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5"></div>
                    </div>
                </div>
            </nav>
            <transition enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        enter-active-class="transition duration-300"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                        leave-active-class="transition duration-300">
                    <div v-if="isOpen" class="absolute z-50 inset-x-0 top-18 origin-top lg:hidden">
                        <NavigationMobile></NavigationMobile>
                    </div>
            </transition>
        </div>
    </header>
</template>