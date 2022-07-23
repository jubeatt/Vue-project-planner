<template>
  <div class="home">
    <div class="container">
      <nav>
        <router-link to="/">Projects</router-link>
        <router-link :to="{ name: 'AddProject' }">Add a New Project</router-link>
      </nav>
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
body {
  padding: 0;
  margin: 0;
  background: #f2f2f2;
}
:root {
  --color-green: #00ce89;
  --color-pink: deeppink;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
}
nav {
  margin-bottom: 40px;
}
.container {
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
}
.home a {
  display: inline-block;
  color: #777;
  text-decoration: none;
  padding: 4px;
  margin: 0 15px;
  font-size: 1.2rem;
  font-weight: bold;
}
.router-link-exact-active {
  border-bottom: 3px solid var(--color-green);
}
.message {
  color: #777;
  font-weight: bold;
}
.btn {
  background: var(--color-green);
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: none;
}
.btn:hover {
  opacity: 0.8;
}
</style>
