<script setup>
import {faqs } from '../data/data'
</script>
<template>
    <section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div class="faq-list">
          <ul>
            <li v-for="faq in faqs" :key="faq.id" data-aos="fade-up" :data-aos-delay="faq.delay">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" :data-bs-target="'#accordion-list-'+faq.id">{{ faq.question }}? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div :id="'accordion-list-' + faq.id" class="collapse show" data-bs-parent=".faq-list">
                <p>
                    {{ faq.answer }}
                </p>
              </div>
            </li>



          </ul>
        </div>

      </div>
    </section>
</template>