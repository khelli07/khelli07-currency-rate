class Card extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set currency(currency) {
    this._currency = currency;
    this.render();
  }

  set currency_name(currency_name) {
    this._currency_name = currency_name;
    this.render();
  }

  set currency_rate(currency_rate) {
    this._currency_rate = currency_rate;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: "Open Sans", Helvetica, sans-serif;
        }
        .card {
          display: flex;
          width: 70%;
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
        
        .card-left {
          float: left;
          color: #082032;
          width: 65%;
          padding: 20px 2vw;
          padding-left: 2rem;
          background-color: white;
          justify-content: space-around;
          align-items: flex-start;
        }
        
        .card-right {
          float: right;
          width: 35%;
          background-color: #082032;
          color: #6be1e6;
          justify-content: space-around;
          align-items: center;
        
          overflow: auto;
        }
        
        .card-right h1 {
          font-size: 1.7rem;
        }
    </style>


    <div class="card">
      <div class="card-left">
        <h2>${this._currency}</h2>
        <p>${this._currency_name}</p>
      </div>
      <div class="card-right">
        <h1>${this._currency_rate}</h1>
      </div>
    </div>

    `;
  }
}

customElements.define("card-item", Card);
