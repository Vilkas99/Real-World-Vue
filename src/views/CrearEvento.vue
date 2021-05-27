<template>
  <div>
    <ul>
      <li v-for="categoria in categorias" :key="categoria">{{ categoria }}</li>
    </ul>
    <form @submit.prevent="crearEvento">
      <label>Select a category</label>
      <select v-model="evento.category">
        <option v-for="cat in categorias" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="evento.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="evento.description"
          type="text"
          placeholder="Add a
        description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="evento.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="evento.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="evento.time">
          <option v-for="time in tiempos" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
  },

  data() {
    const tiempos = []
    for (let i = 1; i <= 24; i++) {
      tiempos.push(i + ':00')
    }
    return {
      tiempos,
      categorias: this.$store.state.categorias,
      evento: this.crearObjetoEvento(),
    }
  },

  methods: {
    crearEvento() {
      this.$store
        .dispatch('crearEvento', this.evento)
        .then(() => {
          this.$router.push({
            name: 'mostrar-evento',
            params: { id: this.evento.id },
          })
          this.evento = this.crearObjetoEvento()
        })
        .catch((error) => console.log(error.response))
    },
    crearObjetoEvento() {
      const usuario = this.$store.state.usuario
      const id = Math.floor(Math.random() * 1000000)

      return {
        id: id,
        user: usuario,
        category: '',
        organizer: usuario,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 24px;
}
</style>
