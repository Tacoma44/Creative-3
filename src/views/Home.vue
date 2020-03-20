<template>
  <div>
    <div class="home">
      <div class="Welcome">
        <div class="Welcome_Content">
          <strong class="opening">Welcome to StarCrest Engineering</strong>
        </div>
        <div class="Image">
          <img src='/Images/Shot.jpg' height="250px" width="250px">
        </div>
      </div>
      <div class='Search_Box'>
        <form class='search'>
          <p>Search Employee By State</p>
          <i class="fas fa-search"></i><input class='state' v-model="input" placeholder="Enter State" />
        </form>
      </div>
      <footer>
        <div class='footer_1'>
          <div class='foot-container'>
            <div class='foot-link'>
              <a href='https://github.com/Tacoma44/Creative-3.git' target="_blank">Github Link</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <EmployeeList :employees='employees' />
  </div>

</template>

<script>
// @ is an alias to /src
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Home',
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
        return this.$root.$data.employees.filter(employee => employee.location.toLowerCase().search(this.input) >= 0);
      }
    }
  },
}
</script>

<style scoped>

.state {
  border-radius: 10px;
}

.Welcome {
  margin-bottom: 20px;
}

.Welcome_Content {
  margin-bottom: 20px;
}

.opening {
  font-size: 40px;
}

footer {
  display: flex;
  width: 50%;
  height: 50px;
  background-color: black;
  justify-content: center;
  bottom: 0;
  position: fixed;
  left: 350px;
}

.foot-link {
  margin-top: 15px;
}

</style>
