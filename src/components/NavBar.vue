<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container">
        <a class="navbar-brand" href="#">Bus Passenger Booking</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <div class="first">
                <router-link to="/" class="nav-link" >Home</router-link>
                </div>
            </li>
            <li class="nav-item">
                <div class="second">
                <router-link to="/bookings" class="nav-link">Bookings</router-link>
                </div>
            </li>
        </ul>
        </div>
    </div>
    
    <img :src="'/images/logo.png'" >
  </nav>
</template>

<script>
export default {

}
</script>

<style>

.first{
    position: absolute;
    left:80%;
    top: 10%;
}

.second{
    position: absolute;
    left:87%;
    top: 10%;
}

   img{
     position: absolute;
     height: 50px;
     width: 50px;
     top: 3px;
     left:24px;
   }




</style>