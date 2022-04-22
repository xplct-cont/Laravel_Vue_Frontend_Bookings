<template>
    <h1>Booked Passenger Information</h1>
   
<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 60rem; height:10rem; position:relative;
left:7%;">  
          <div class="card-header">
                      <table class="table table-hover text-center">
                            <tr>

                                <th class="bg-info">Bus Name</th>
                                <th class="bg-info">Passenger Name</th>
                                <th class="bg-info">Address</th>
                                <th class="bg-info">Contact Number</th>
                            </tr>
                          
                            <tr>
                                <td>{{booking.bus_name}}</td>
                                <td>{{booking.passenger_name}}</td>
                                <td>{{booking.address}}</td>
                                <td>{{booking.contact_no}}</td>
                            </tr>             
                    </table>
             </div>
     </div>
 
      
                                


</template>

<script>
export default{
    props:['id'],
  
   data(){
       return{
           booking: {}
       }
   },

   mounted(){
       fetch('http://localhost:8000/api/bookings/' + this.id)
       .then(res => res.json())
       .then(data => this.booking = data)
       .then(err => console.log(err))
   }


}

</script>

<style scoped>
 h1{
     color:DarkSlateGray;
     font-weight:normal;
     font-size:35px;
 }

 td{
     color:DarkSlateGray;
 }

</style>