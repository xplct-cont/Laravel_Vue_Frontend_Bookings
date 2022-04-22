<template>
  <div>
      <h1 style="color:DarkSlateGray; font-weight:normal; font-size:35px;">List of Bookings</h1>
      <hr>
     
          <div class="col-md-12  shadow-lg p-3 mb-5 bg-white rounded">
              <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th class="bg-info">Bus Name</th>
                        <th class="bg-info">Passenger Name</th>
                        <th class="bg-info">Address</th>
                        <th class="bg-info">Contact Number</th>
                        <th class="bg-info">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="booking in bookings" :key="booking.id">
                        <td>{{booking.bus_name}}</td>
                        <td>{{booking.passenger_name}}</td>
                        <td>{{booking.address}}</td>
                        <td>{{booking.contact_no}}</td>
                        <td>
                         <router-link :to="{name: 'ViewBooking' , params: {id: booking.id}}"
                         class="btn btn-info btn-sm"
                         >View</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
 
</template>

<script>
export default {
    data() {
        return {
            booking: {
                id:null,
                bus_name:'',
                passenger_name:'',
                address:'',
                contact_no:''
            },

            bookings:[]
        }
    },
    methods: {
        addBooking() {
           
        },
        getData(){
          fetch('http://localhost:8000/api/bookings')
          .then(response=>response.json())
          .then(data=>this.bookings = data)
          .catch(err=>console.log(err) )
        }
    },

    mounted() {
      this.getData();
    },
}
</script>

<style>
</style>