<script setup>
import { count } from '../data/data'
</script>
<template>
    <section id="counts" class="counts">
      <div class="container">

        <div class="row" data-aos="fade-up">

          <div v-for="(count,index) in count.list" :key="index" :class="count.div_class">
            <div class="count-box">
              <i :class="count.icon"></i>
              <span data-purecounter-start="0" :data-purecounter-end="count.number" data-purecounter-duration="1" :class="count.number_class">{{ count.number }}</span>
              <p>{{ count.title }}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
</template>