<template>
  <div class='total_box'>

    <h3>Connect</h3>

      <form class='sub' v-on:submit.prevent="addComment()">
        <input class='name_1' v-model="input" placeholder="Employee Name">
        <textarea class='name_2' v-model="addedComment"></textarea>
        <br/>
        <button class='name_3' type="submit">Send Memo</button>
        <p>Number of Memos Sent: {{Dcount}}</p>
      </form>


    <div class='fun'>
      <EmployeeList :employees='employees' />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Connect',
  components: {
    EmployeeList
  },
  data() {
    return {
      input: '',
      addedComment: "",
    }
  },
  computed: {
    Dcount() {
      return this.$root.$data.contact_requests.length;
    }

  },
  methods: {
    addComment() {
      this.$root.$data.person.name = this.input
      this.$root.$data.person.memo = this.addedComment
      this.$root.$data.contact_requests.push(
         this.$root.$data.person
      );

    }
  },
}
</script>


<style>

button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
}

textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
}

.total_box {
  width: 100%;
}

form {
  width: 500px;
  position:relative;
  left: 390px;
}

.name_1, .name_2, .name_3 {
  border-radius: 10px;
}

.name_1, .name_2 {
  margin-bottom: 10px;
}


</style>
