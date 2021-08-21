import "./card.js";
import currencies_abr from "../data/data-name";

class CardPair extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  set amount(amount) {
    this._amount = amount;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Open Sans", Helvetica, sans-serif;
        }
        .card-container {
          width: 75%;
          margin: auto;
          margin-top: 10px;
          display: flex;
        }
        .card {
          display: flex;
          flex-direction: column;
        
          width: 40%;
          margin: auto;
          margin-top: 10px;
          margin-bottom: 30px;
          filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.15));
        }
        
        .card-left,
        .card-right {
          height: 120px;
          display: flex;
          flex-direction: column;
        }
        
        .card-right {
          height: 85px;
        }
        
        .card-left {
          color: #082032;
          padding: 20px 2vw;
          padding-left: 2rem;
          background-color: white;
          justify-content: space-around;
          align-items: flex-start;
        }
        
        .card-right {
          background-color: #082032;
          color: #6be1e6;
          justify-content: space-around;
          align-items: center;
        
          overflow: auto;
        }
        
        .card-right h1 {
          font-size: 1.7rem;
        }

        @media screen and (max-width: 760px){
          .card-container{
            width: 100%;
            flex-direction: column;
          }
          .card{
            width: 70%;
          }
        }
    </style>

    <div class="card-container">
    <div class="card">
      <div class="card-left">
        <h2>${this._data.base_code}</h2>
        <p>${currencies_abr[0][this._data.base_code]}</p>
      </div>
      <div class="card-right">
        <h1>${this._amount.toLocaleString()}</h1>
      </div>
    </div>

    <div class="card">
      <div class="card-left">
        <h2>${this._data.target_code}</h2>
        <p>${currencies_abr[0][this._data.target_code]}</p>
      </div>
      <div class="card-right">
        <h1>${this._data.conversion_result.toLocaleString()}</h1>
      </div>
    </div>
  </div>
    `;
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
      @media screen and (max-width: 760px) {
        .placeholder{
          width:80%;
        }
      }
    </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  }
}

customElements.define("card-pair", CardPair);
