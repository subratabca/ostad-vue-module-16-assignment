<script setup>
import { gallery } from '../data/data'
</script>
<template>
    <section id="gallery" class="gallery">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{{gallery.title}}</h2>
          <p>{{gallery.subtitle}}</p>
        </div>

        <div class="row g-0" data-aos="fade-left">

          <div v-for="(gallery,index) in gallery.images" :key="index" class="col-lg-3 col-md-4">
            <div class="gallery-item" data-aos="zoom-in" data-aos-delay="gallery.delay">
              <a href="assets/img/gallery/gallery-1.jpg" class="gallery-lightbox">
                <img :src="gallery.src" :alt="gallery.alt" :class="gallery.class">
              </a>
            </div>
          </div>


        </div>

      </div>
    </section>
</template>