<template>
  <div>
    <h1>Ups!</h1>
    <h3>Estás experimentando problemas de red!</h3>
    <router-link :to="{ name: 'lista-evento' }"
      >Regresar a la página principal</router-link
    >
  </div>
</template>
