<script setup lang="ts">
import {type HTTPMethod} from 'h3';

const fetchResult = ref('-');

async function fetch(route: string, method: HTTPMethod = 'GET') {
  try {
    fetchResult.value = await $fetch('http://localhost:3001' + route, {
      method
    });
  } catch (e) {
    fetchResult.value = `ERROR: ${e}`
    throw e;
  }
}
</script>

<template>
  <div style="margin-bottom: 10px">
    Fetch result: {{ fetchResult }}
  </div>
  <div>
    <button @click="fetch('/items', 'PATCH')">PATCH /items</button>
    <button @click="fetch('/products')">GET /products</button>
    <button @click="fetch('/products', 'PATCH')">PATCH /products</button>
  </div>
</template>

<style>
button {
  display: block;
  width: 200px;
  background: lightgray;
  border: none;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  padding: 10px;
}
</style>
