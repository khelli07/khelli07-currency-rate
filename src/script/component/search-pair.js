class SearchPair extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return [
      this.shadowDOM.querySelector("#searchBase").value,
      this.shadowDOM.querySelector("#searchPair").value,
      this.shadowDOM.querySelector("#searchAmount").value,
    ];
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .form-input {
              width: 100%;
              min-height: 140px;
              margin: auto;
            
              padding: 2.5vw 4vw;
              font-family: "Open Sans", Arial, Helvetica, sans-serif;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            
            .form-input label {
              color: #020f1a;
              font-size: 1.5rem;
              font-weight: 700;
              letter-spacing: 1.5px;
            }
            
            input {
              color: white;
              background-color: #53b8bb;
              padding: 2vw 2vw;
              width: 20%;
              margin-right: 10px;
              height: 2.5rem;
            
              margin-top: 1rem;
              margin-left: 5px;
              border: none;
            
              font-size: 1rem;
              font-weight: 600;
              letter-spacing: 2px;
            }
            
            input::placeholder {
              color: white;
            }
            
            input:focus {
              outline: none;
              color: white;
            }
            
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px white inset !important;
            }
            
            input:-webkit-autofill::first-line {
              font-family: "Open Sans", Arial, Helvetica, sans-serif;
              color: white;
              padding: 0.7vw;
              padding-left: 1vw;
              padding-bottom: 1vw;
              font-size: 1rem;
            }
            
            #searchButtonElement {
              height: fit-content;
            
              font-family: "Font Awesome 5 Free";
              font-size: 1.5rem;
              font-weight: 900;
            
              background-color: transparent;
              color: #020f1a;
              cursor: pointer;
              border-style: none;
            }
            
            #searchButtonElement::before {
              content: "\\f002";
            }            
      </style>

      <div class="form-input">
      <div class="container">
        <label>Pair Currency<br /></label>
        from
        <input
          placeholder="e.g IDR"
          id="searchBase"
          class="pair"
          type="search"
          maxlength="3"
        />
        to
        <input
          placeholder="e.g USD"
          id="searchPair"
          class="pair"
          type="search"
          maxlength="3"
        />
        <input
          placeholder="e.g 100"
          id="searchAmount"
          class="pair"
          type="number"
          maxlength="3"
        />
        <button id="searchButtonElement" type="submit"></button>
      </div>
    </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-pair", SearchPair);
