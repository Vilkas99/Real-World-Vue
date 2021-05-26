<template>
  <router-link
    class="event-link"
    :to="{ name: 'mostrar-evento', params: { id: evento.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ evento.time }} en {{ evento.date }}</span>
      <h4 class="title">{{ evento.title }}</h4>
      <BaseIcon nombre="users"
        >{{ evento.attendees.length }} personas asistiendo</BaseIcon
      >
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    evento: Object,
  },
}
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
