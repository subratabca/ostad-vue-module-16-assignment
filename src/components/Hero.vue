<script setup>
    import { hero } from '../data/data'
</script>

<template>
  <section id="hero">

<div class="container">
  <div class="row justify-content-between">
    <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
      <div data-aos="zoom-out">
        <h1>{{ hero.title}}</h1>
        <h2>{{ hero.slogan }}</h2>
        <div class="text-center text-lg-start">
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
      <img :src="hero.image.src" :class="hero.image.class" :alt="hero.image.alt">
    </div>
  </div>
</div>



</section>
</template>

<style scoped></style>