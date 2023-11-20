<script setup>
import { pricing_plans } from '../data/data'
</script>
<template>
    <section id="pricing" class="pricing">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </div>

        <div class="row" data-aos="fade-left">

          <div v-for="(price,index) in pricing_plans" :key="index" :class="price.div_class">
            <div class="box" data-aos="zoom-in" data-aos-delay="price.delay">
              <h3>{{price.name}}</h3>
              <h4><sup>$</sup>{{price.price}}<span> / month</span></h4>
              <ul>
                <li>{{price.features.one}}</li>
                <li>{{price.features.two}}</li>
                <li>{{price.features.three}}</li>
                <li :class="price.features.na1">{{price.features.four}}</li>
                <li :class="price.features.na2">{{price.features.five}}</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
</template>