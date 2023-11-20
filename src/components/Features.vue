<script setup>
import { features } from "../data/data";
</script>
<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Check The Features</p>
      </div>

      <div class="row" data-aos="fade-left">
        <div
          v-for="(feature, index) in features.list"
          :key="index"
          :class="feature.div_class"
        >
          <div
            class="icon-box"
            data-aos="zoom-in"
            :data-aos-delay="feature.delay"
          >
            <i :class="feature.icon" :style="feature.dynamicColor"></i>
            <h3>
              <a href="">{{ feature.title }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
