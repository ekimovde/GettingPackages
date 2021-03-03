<template>
  <div class="info">
    <h4 class="info__title">
      Информация для запросов!
    </h4>

    <ul class="info__menu">
      <li class="info__item" v-for="item in info" :key="item.id">
        {{ item.id }}. <span class="info__text">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./TableInfo.scss";

export default {
  name: "TableInfo",
  data() {
    return {
      info: [
        {
          id: 1,
          title: "В качестве запроса писать: название пакета @ версия",
        },
        {
          id: 2,
          title: "Пример запроса: npm@3.2.1",
        },
        {
          id: 3,
          title: "Пример запроса: jquery@3.2.1",
        },
        {
          id: 4,
          title: "Пример запроса: vue@2.1.0",
        },
      ],
    };
  },
};
</script>
