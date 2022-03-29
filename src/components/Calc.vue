<template>
  <div>
    <div class="container">
      <div style="float: left; text-align: center;">
        <label for="startDate-input" class="mt-3 mb-3">Дата рождения</label>
      </div>
      <div style="text-align: right;">
        <label for="endDate-input" class="mt-3 mb-3">
          Дата до которой считаем (сегодня)
        </label>
      </div>

      <b-input-group class="mb-3">
        <b-form-input
          id="startDate-input"
          v-model="startDate"
          type="text"
          placeholder="YYYY-MM-DD"
          autocomplete="on"
        ></b-form-input>

        <b-form-input
          id="endDate-input"
          v-model="endDate"
          type="text"
          placeholder="YYYY-MM-DD"
          autocomplete="on"
        ></b-form-input>
      </b-input-group>
      <div class="container">
        Физический цикл: {{ p }} день (из 23. Переход на 0 и 11.5 дней). {{ pf}}
        <br />
        Эммоциональный цикл: {{ e }} день (из 28. Переход на 0 и 14 дней) {{ ef }}
        <br />
        Интелектуальный цикл: {{ i }} день (из 33. Переход на 0 и 16.5 дней) {{ intf }}
        <br />
      </div>
    </div>
    <div class="mt-4 text-center">
      <a
        href="https://books.google.com.ua/books?id=PwYAAwAAQBAJ&pg=PA35&lpg=PA35&dq=%D0%B4%D0%BB%D1%8F+%D1%82%D0%BE%D0%B3%D0%BE+%D1%87%D1%82%D0%BE%D0%B1%D1%8B+%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9+%D0%BC%D0%BE%D0%B3+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C+%D1%81%D0%B2%D0%BE%D0%B8+%D0%B1%D0%B8%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B,+%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB&source=bl&ots=T6uaXlZlJc&sig=ACfU3U35rSaRqSvjzJAKZLmOufIAXjGvSQ&hl=ru&sa=X&ved=2ahUKEwirq8vqyen2AhW3hv0HHf6dAo8Q6AF6BAgCEAM#v=onepage&q=%D0%B4%D0%BB%D1%8F%20%D1%82%D0%BE%D0%B3%D0%BE%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9%20%D0%BC%D0%BE%D0%B3%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%B1%D0%B8%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B%2C%20%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB&f=false"
      >
        "Биологические ритмы и сон." Л.И. Куприянович
      </a>
    </div>
  </div>
</template>
<script>
const moment = require('moment')
export default {
  data() {
    return {
      startDate: null,
      endDate: moment().format('YYYY-MM-DD'),
    }
  },
  computed: {
    days: function () {
      console.log(this.startDate)
      if (null == this.startDate) {
        return null
      }

      //var current = moment().startOf('day')
      var given = moment(this.endDate, 'YYYY-MM-DD')
      //Difference in number of days
      const days = moment.duration(given.diff(this.startDate)).asDays()
      console.log(days)
      return days
    },
    p: function () {
      return this.days % 23
    },
    e: function () {
      return this.days % 28
    },
    i: function () {
      return this.days % 33
    },
    pf: function () {
      return this.p > 23/2 ? 'Отрицательная фаза' : 'Положительная фаза'
    },
    ef: function () {
      return this.e > 28/2 ? 'Отрицательная фаза' : 'Положительная фаза'
    },
    intf: function () {
      return this.i > 33/2 ? 'Отрицательная фаза' : 'Положительная фаза'
    },

  },
}
</script>
