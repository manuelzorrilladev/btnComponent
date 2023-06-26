<script setup>
import Navbar from './components/Navbar.vue'
import BaseBtn from './components/BaseBtn.vue'
import IconBtn from './components/IconBtn.vue'

const btnTypes = ['default', 'outline', 'text', 'disableShadow']
const icons = ['facebook', 'twitter', 'amazon', 'google', 'shopping-cart']
const size = ['sm', 'md', 'big']
const colors = ['default', 'primary', 'secondary', 'danger']


</script>

<template>
  <div>
    <Navbar />
    <div class="contentBox">
      <div class="contentItem">
        <header v-for="item in btnTypes">
          <h4>&lt;Button {{ item }}&gt;</h4>
          <BaseBtn :variant="item" />
        </header>
      </div>
      <div class="contentItem row">
        <header>
          <h4>&lt;Button disabled&gt;</h4>
          <BaseBtn arg="disabled" />
        </header>
        <header>
          <h4>&lt;Button text disabled&gt;</h4>
          <BaseBtn arg="disabled" variant="text" />
        </header>
      </div>
      <h4>Buttons with start icons</h4>
      <div class="contentItem row">
        <IconBtn v-for="item in icons" start="start" :icon="item" />
      </div>
      <h4>Buttons with end icons</h4>
      <div class="contentItem row">
        <IconBtn v-for="item in icons" start="end" :icon="item" />
      </div>
      <div class="contentItem row " >
        <div v-for="item in size">
          <h4>&lt;Button size={{ item }}&gt;</h4>
          <BaseBtn :size="item" />
        </div>
      </div>
      <div class="contentItem row " >
        <div v-for="item in colors">
          <h4>&lt;Button color={{ item }}&gt;</h4>
          <BaseBtn :color="item" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.contentBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5%;
  gap: 20px;
}

.contentItem {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.row {
  flex-direction: row !important;
}
</style>
