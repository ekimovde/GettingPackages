<template>
  <div class="home">
    <div class="container">
      <div class="top">
        <div class="top__header">
          <span class="top__block">
            <i class="bx bx-meteor bx-tada top__icon" />
            <span class="top__name">Тестовое задание</span>
          </span>
        </div>

        <div class="top__offer">
          <h1 class="top__title">
            Получайте нужный Вам пакет в любое время.
          </h1>
          <p class="top__descr">
            Getting Packages - это инструмент для тех, кто ценит знание,
            внимание и гибкость.
          </p>
        </div>
      </div>

      <div class="offer">
        <Packages />
      </div>

      <div class="footer">
        <img src="" class="footer__image" alt="" />

        <div class="footer__info">
          <a
            href="https://github.com/ekimovde/GettingPackages"
            class="footer__link"
            target="_blank"
          >
            <i class="bx bxl-github bx-tada" />
          </a>

          <div class="footer__block">
            <i class="bx bx-bold bx-tada footer__icon"></i>
            <span class="footer__name">Екимов Денис Витальевич</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Home.scss";
import Packages from "@/components/commons/Packages/Packages";

export default {
  name: "Home",
  components: {
    Packages,
  },
};
</script>
