<template>
  <div>
    <div class="a" v-for="contact_request in contact_requests" :key="contact_request.name">
      <p>{{contact_request.name}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'RequestList',
    props: {
      contact_requests: Array
    },
}
</script>
