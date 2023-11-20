<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Features from './components/Features.vue';
import Count from './components/Count.vue'
import Details from './components/Details.vue';
import Gallery from './components/Gallery.vue';
import Pricing from './components/Pricing.vue';
import FAQ from './components/FAQ.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue'
</script>

<template>
    <Header></Header>
    <Hero></Hero>
    <main id="main">
        <About></About>
        <Features></Features>
        <Count></Count>
        <Details></Details>
        <Gallery></Gallery>
        <Pricing></Pricing>
        <FAQ></FAQ>
        <Contact></Contact>
    </main>
    <Footer></Footer>
</template>