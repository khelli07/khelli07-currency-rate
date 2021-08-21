import "./card.js";
import currencies_abr from "../data/data-name";

class CardAllContainer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set currencies(currencies) {
    this._currencies = currencies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    for (const [key, value] of Object.entries(this._currencies)) {
      const card = document.createElement("card-item");
      card.currency = key;
      card.currency_name = currencies_abr[0][key];
      card.currency_rate = value;
      this.shadowDOM.appendChild(card);
    }
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
      .placeholder {
        width: 60%;
        margin: auto;
        font-weight: lighter;
        font-family: "Open Sans", Helvetica, sans-serif;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  }
}

customElements.define("card-all-container", CardAllContainer);
