<template>
  <div class="wrapper">
    <div class="employees">
      <div class="employee" v-for="employee in employees" :key="employee.id">
        <div class="info">
          <div class="Name">
            <Strong>Name:</Strong>
            <p>{{employee.first_name}} {{employee.last_name}}</p>
            <div class='position'>
              <Strong>Position: </strong>
              <p>{{employee.position}}</p>
            </div>
            <div class="university">
              <strong>Education: </strong>
              <p>{{employee.education}}</p>
            </div>
          </div>
          <div class='other'>
          <div class="Picture">
            <img :src="'/Images/'+employee.photo" height="350px" width="250px">
          </div>
          <div class="Bottom">
          <div class="location">
            <p><strong>Work Location: </strong>{{employee.location}}</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EmployeeList',
    props: {
      employees: Array
    },
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .employees {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .employee {
    margin: 10px;
    margin-top: 50px;
    width: 390px;
    height: 410px;
  }

  .info {
    display: flex;
    background: #F0F8FF;
    color: #000;
    height: 410px;
    width: 390px;
    border: 1px solid black;
    justify-content:flex-start;
  }

  .bottom {
    display: flex;
    height: 30px;
    width: 100%;
  }

  .Name {
    width: 110px;
    height: 80%;
    background-color: #F0E68C;
    margin-left: 10px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 10px;
  }

  .Picture {
    margin-top: 10px;
    margin-left: 10px;
    justify-content: center;
  }

  .other {
    display: grid;
    justify-content: center;
  }

  .Bottom {
    display: flex;
    width: 250px;
    justify-content: center;
    
  }

  .location {
    text-align: center;
    height: 30px;
    position: relative;
    bottom: 10px;
  }

  strong, p {
    font-size: 15px;
  }
</style>
