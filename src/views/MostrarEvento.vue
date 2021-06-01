<template>
  <div>
    <div class="event-header">
      <span class="eyebrow"
        >@{{ evento.time }} on {{ evento.date | date }}</span
      >
      <h1 class="title">{{ evento.title }}</h1>
      <h5>Organized by {{ evento.organizer ? evento.organizer.name : '' }}</h5>
      <h5>Category: {{ evento.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ evento.location }}</address>
    <h2>Event details</h2>
    <p>{{ evento.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{
        evento.attendees ? evento.attendees.length : 0
      }}</span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in evento.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

.
<script>
export default {
  name: 'MostrarEvento',
  props: {
    evento: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
