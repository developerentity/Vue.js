Vue.component("menu-footer", {
  template: `
    <div class="menu-footer">
      <div>
          <ul>
              <li>Доставка и оплата</li>
              <li>Контакты</li>
              <li>Вакансии</li>
          </ul>
      </div>
      <div class="menu-footer_call-section">
          <div>
              <img width="17px" height="17px" src="./assets/phone.svg" alt="phone">
              <a href="tel:0 800 330 039">0 800 330 039</a>
          </div>
          <div class="info">Call-центр работает
              <br>
              c 7:00 до 23:00
          </div>
      </div>
      <div class="horizontal-row"></div>
      <div class="menu-footer_select-block">
          <div>
              <label for="country">Доставка</label>
              <select name="country" id="country">
                  <option value="">Украина</option>
                  <option value="">US</option>
              </select>
          </div>
          <div>
              <label for="language">Язык</label>
              <select name="language" id="language">
                  <option value="">Русский</option>
                  <option value="">English</option>
              </select>
          </div>
          <div>
              <label for="currency">Валюта</label>
              <select name="currency" id="currency">
                  <option value="">Грн</option>
                  <option value="">USD</option>
              </select>
          </div>
      </div>
    </div>
   `,
});

Vue.component("close-menu-button", {
  template: `
    <button
      @click="$emit('on-close')"
      key="menu"
      >
        <img class="button_icon menu-btn" src="./assets/close.svg" alt="menu close">
    </button>
  `,
});

Vue.component("sub-menu", {
  props: ["list", "title"],
  template: `
    <ul class="menu-list">
      <li 
        class="title"
        @click="$emit('on-hide')"
        >
          <img class="arrow-left" src="./assets/arrowleft.svg" alt="arrow right">
          {{title}}
      </li>
      <li class="title">Все</li>
      <li v-for="item in list"><a>{{item.title}}</a></li>
    </ul>
  `,
});

Vue.component("product-item", {
  props: ["item"],
  template: `
        <div class="product">
            <div>
                <img :src="item.img" alt="product image">
            </div>
            <div class="product_title">
                {{item.title}}
            </div>
            <div class="product_description">
                {{item.description}}
            </div>
            <div class="product_amount fade-text">
                {{item.amount}}
            </div>
        </div>
    `,
});

const vm = new Vue({
  el: "#root",
  methods: {
    showMenu: function () {
      this.menuState = true;
    },
    closeMenu: function () {
      this.menuState = false;
      this.subMenuState = false;
    },
    showSubMenu: function (filterBy, title) {
      this.nameSubMenuCategory = title;
      this.subMenuList = this.allProducts.filter(
        (item) => item[filterBy] === true
      );
      this.subMenuState = true;
    },
    hideSubMenu: function () {
      this.subMenuState = false;
      this.subMenuList = [];
      this.nameSubMenuCategory = "";
    },
  },
  data: {
    menuState: false,
    subMenuState: false,
    nameSubMenuCategory: "",
    mostPopularSearches: [
      { id: 2, title: "Омега-3" },
      { id: 3, title: "Витамин Д3" },
      { id: 4, title: "Слвален" },
      { id: 5, title: "Витамины для детей" },
    ],
    subMenuList: [],
    allProducts: [
      {
        id: 1,
        title: "Омега-3 Тунец",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 2,
        title: "Коллаген",
        description: "Пептиды первого типа из Франции",
        amount: "30 порций в стиках",
        img: "./assets/cod.png",
        forKid: false,
        forAdult: false,
      },
      {
        id: 3,
        title: "Витамин D3 2000 ME",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 4,
        title: "Омега-3 Треска",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 5,
        title: "Витамин D3 5000 ME",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 6,
        title: "Витамин D3 + К2",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 7,
        title: "Сквален",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 8,
        title: "Акулий жир",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 9,
        title: "Kids Омега-3 Треска",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: false,
        forAdult: true,
      },
      {
        id: 10,
        title: "Kids Омега-3 Тунец",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: true,
        forAdult: false,
      },
      {
        id: 11,
        title: "Kids Омега-3 Треска",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: true,
        forAdult: false,
      },
      {
        id: 12,
        title: "Kids Витамин D3",
        description: "Пептиды первого типа из Франции",
        amount: "120 Капсул",
        img: "./assets/tuna.png",
        forKid: true,
        forAdult: false,
      },
    ],
  },
});
