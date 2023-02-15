<template>
<section class="hero">
    <div class="video-container">
        <video
            autoplay
            loop
            muted
            class="opacity-50"
        >
            <source
            src="~/assets/videos/klussir-bkg.mp4"
            type="video/mp4"
            />
        </video>
    </div>
        <div class="mx-auto max-w-7xl lg:px-4">
            <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                <div class="left-container">
                    <div class="lg:py-48">
                        <div class="relative">
                            <h1 class="title-text">
                               <span class="text-amber-500">Meubelstuk op maat ? </span>
                               <span class="text-slate-50">Tuin <span class="text-amber-500 italic">verfraaien</span> of <span class="text-amber-500 italic">verlichting</span> niet in orde?</span>
                            </h1>
                            <p class="mid-text">Wij maken het voor je!</p>
                            <div class="mt-4">
                                <p class="small-text">Benieuwd naar onze klus mogelijkheden ?</p>
                                <CtaButton class="px-12 mt-2" text="Vraag offerte"></CtaButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style scoped>
.hero {
    @apply relative flex w-screen min-h-full
    max-w-full bg-cover overflow-hidden;
}
.video-container { 
    @apply absolute bg-black w-screen min-h-[80vh] max-w-full bg-cover overflow-hidden;
}
.left-container { 
    @apply mx-auto max-w-md px-4 sm:max-w-2xl 
    sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left;
}
.title-text {
    @apply drop-shadow-md mt-4 text-4xl font-bold tracking-tight
    text-slate-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl
}
.mid-text {
    @apply font-bold tracking-tight text-slate-50 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-3xl
}
.small-text {
    @apply tracking-tight text-slate-50 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-2xl
}
</style>