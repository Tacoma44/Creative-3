<template>
  <div>
    <img src="/Images/Quote.jpg" height="500px" width="100%"/>

    <div class='Search_Box'>
      <form class='search'>
        <p class="university">Search Employee By University</p>
        <p class="all">Type "all" to see every university</p>
        <i class="fas fa-search"></i><input class='state' v-model="input" placeholder="Select University" />
      </form>
    </div>
  <EmployeeList :employees='employees' />
</div>
</template>

<script>
// @ is an alias to /src
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Networking',
  components: {
    EmployeeList
  },
  data() {
    return {
      input: '',
    }
  },
  computed: {
    employees() {
      if(this.input === "") {
        return "";
      }
      else if(this.input == "all") {
        return this.$root.$data.employees;
      }
      else  {
        return this.$root.$data.employees.filter(employee => employee.education.toLowerCase().search(this.input) >= 0);
      }
    }
  },
}
</script>


<style>

.state {
  border-radius: 10px;
}

.university {
  font-size: 20px;
}

.all {
  font-size: 12px;
}



</style>
