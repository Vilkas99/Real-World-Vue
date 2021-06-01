<template>
  <div>
    <h1>Ooops!</h1>
    <h3>{{ resource }} no se ejecutó correctamente</h3>
    <router-link :to="{ name: 'lista-evento' }"
      >Regresar a la página principal</router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>
