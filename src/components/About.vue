<script setup>
import { about } from '../data/data'
</script>
<template>
    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
            <a :href="about.img.link" :class="about.img.img_class"></a>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>{{ about.title }}</h3>
            <p>{{ about.subtitle }}</p>

            <div v-for="(about,index) in about.list" :key="index" class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i :class="about.icon_class"></i></div>
              <h4 class="title"><a href="">{{ about.heading }}</a></h4>
              <p class="description">{{ about.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>