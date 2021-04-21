<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search">
          <label for="imageOfDay">Image Of The Day</label>
          <input type="text" name="imageOfDay" id="imageOfDay" placeholder="Date..." v-model="state.query">
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
      <div class="col">
        <Details />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
//  import { apodsService } from '../services/ApodsService'
//  import Details from '../components/DetailsComponent'

export default {
  name: 'HomePage',
  setup () {
    const state = reactive ({
      apod: ''
    })
    return {
      state,
      async search () {
        try {
          await moviesService.getMovies(state.query)
          state.query = ''
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
  // components: {
  //   Results,
  //   Details
  // }
}

</script>

<style lang="scss" scoped>

</style>
