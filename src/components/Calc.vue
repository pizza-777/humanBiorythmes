<template>
<div>
<div class="container">
     <label for="example-input" class="mt-3 mb-3">Дата рождения</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="on"
      ></b-form-input>
      
    </b-input-group>
    <div class="container">
     Физический цикл: {{p}} день<br>
     Эммоциональный цикл: {{e}} день<br>
     Интелектуальный цикл: {{i}} день  <br>  
    </div>
</div>
<div class="mt-4 text-center">
  <a href="https://books.google.com.ua/books?id=PwYAAwAAQBAJ&pg=PA35&lpg=PA35&dq=%D0%B4%D0%BB%D1%8F+%D1%82%D0%BE%D0%B3%D0%BE+%D1%87%D1%82%D0%BE%D0%B1%D1%8B+%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9+%D0%BC%D0%BE%D0%B3+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D0%B8+%D0%B1%D0%B8%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B,+%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB&source=bl&ots=T6uaXlZlJc&sig=ACfU3U35rSaRqSvjzJAKZLmOufIAXjGvSQ&hl=ru&sa=X&ved=2ahUKEwirq8vqyen2AhW3hv0HHf6dAo8Q6AF6BAgCEAM#v=onepage&q=%D0%B4%D0%BB%D1%8F%20%D1%82%D0%BE%D0%B3%D0%BE%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9%20%D0%BC%D0%BE%D0%B3%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%B1%D0%B8%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B%2C%20%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB&f=false">
    "Биологические ритмы и сон." Л.И. Куприянович
  </a>
</div>
</div>
</template>
<script>
const moment = require('moment');
export default {
  data() {
    return {
      value: null,
      formatted: null,
      selected: null,
   
 
    }
  },
  computed:{
    days: function(){
      console.log(this.value)  
      if(null == this.value){
        return null;
      }
      
var current = moment().startOf('day');
var given = moment(current, "YYYY-MM-DD");
//Difference in number of days
      const days = (moment.duration(given.diff(this.value)).asDays());    
      console.log(days)
      return days;
    },
    p: function (){
       return this.days%23;
    },
    e: function (){
       return this.days%28;
    },
    i: function (){
        return this.days%33;
    }
  } 
}
</script>
