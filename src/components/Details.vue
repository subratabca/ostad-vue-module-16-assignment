<script setup>
import { details } from '../data/data'
</script>
<template>
    <!-- ======= Details Section ======= -->
    <section id="details" class="details">
        <div class="container">

        <div class="row content">
            <div class="col-md-4" data-aos="fade-right">
            <img :src="details.image.src" :class="details.image.class" :alt="details.image.alt">
            </div>
            <div class="col-md-8 pt-4" data-aos="fade-up">
                <h3>{{ details.title }}</h3>
                <p class="fst-italic"> {{ details.description }} </p>
                <ul>
                    <li v-for="(list, index) in details.lists" :key="index"><i class="bi bi-check"></i> {{ list }}</li>
                </ul>
                <p>{{ details.footer }}</p>
            </div>
        </div>

        </div>
        </section>
</template>