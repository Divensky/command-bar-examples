<template>
  <main ref="aboutRef">
    <h1>About</h1>
    <p>
      Welcome to this demo! This is a basic Create-Read-Update-Delete app. Here
      is what you can do:
    </p>
    <ul>
      <li>Add names</li>
      <li>Replace names</li>
      <li>Filter names</li>
      <li>Delete names</li>
    </ul>

    <h2 id="learn">Learn about CommandBar</h2>
    <p>
      This app demonstrates the power of
      <a href="https://www.commandbar.com/">CommandBar</a>. It is at your
      fingertips to do any of the following:
    </p>
    <ul>
      <li>Navigate to any page</li>
      <li>Execute all available actions</li>
      <li>Search for available commands</li>
      <li>Leave feedback</li>
    </ul>

    <h2 id="help">Get help</h2>
    <p>
      If you have any questions after reviewing the above, please press
      <strong>Ctrl+K</strong>
      and select three dots in the bottom right corner.
    </p>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRageClickOutside } from "@/useRageClickOutside";

const aboutRef = ref(null);

useRageClickOutside(aboutRef);
</script>
