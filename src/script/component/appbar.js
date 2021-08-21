class AppBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
    // shadowDOM bebas namanya, bisa diganti shadowRoot
  }

  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Open Sans", Helvetica, sans-serif;
          }
          
          h2 {
            height: 100%;
            display:flex;
            justify-content:space-around;
            align-items:center;
            margin-left: 5%;
            font-size: 1.75rem;
            color: #FF2626;
            cursor: default;
          }
          nav {
            display: flex;
            background-color: #082032;
            height: 10vh;
          }
          
          .nav-links {
            display: flex;
            list-style: none;
            width: 60%;
            height: 100%;
          
            justify-content: space-around;
            align-items: center;
            margin-left: auto;
          }
          
          .nav-links li a {
            display: inline-block;
            color: #6be1e6;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 1.25px;
            transition: all 0.3s ease;
          }
          
          .animate-link::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background-color: #6be1e6;
            transition: width 0.3s ease-in;
          }
          
          .animate-link:hover::after {
            width: 100%;
            transition: width 0.3s;
          }
          
          .hamburger {
            display: none;
          }
          
          @media screen and (max-width: 760px) {
            .hamburger {
              position: absolute;
              display: flex;
              right: 8%;
              top: 3%;
          
              font-family: "Font Awesome 5 Free";
              color: #6be1e6;
              font-weight: 900;
              font-size: 1.5rem;
          
              background-color: transparent;
              border-style: none;
              cursor: pointer;
            }
          
            .hambefore:before {
              content: "\\f0c9";
              z-index: 100;
            }
            .hamafter:before {
              content: "\\f00d";
              z-index: 100;
            }
          
            .nav-links {
              position: fixed;
              flex-direction: column;
              background-color: #082032;
          
              height: 100vh;
              width: 100%;
          
              clip-path: circle(0px at 90% -10%);
              -webkit-clip-path: circle(0px at 90% -10%);
              transition: all 1s ease-out;
              z-index: 99;
            }
          
            .nav-links.open {
              padding: 0;
              margin: 0;
              clip-path: circle(1000px at 90% -10%);
              -webkit-clip-path: circle(1000px at 90% -10%);
            }
          
            .nav-links li {
              width: 100%;
              height: 100%;
          
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.5s ease;
            }
          
            .nav-links li a {
              font-weight: 600;
              font-size: 1.2rem;
            }
          
            .nav-links li a:hover {
              color: #6be1e6;
              text-decoration: none;
            }
          
            .nav-links li:hover {
              background-color: #020f1a;
              cursor: default;
            }
          
            .animate-link:hover::after {
              width: 0%;
            }
          }
      </style>
      
      <div id="navContainer">
        <nav>
          <h2>CExR</h2>
          <ul class="nav-links">
            <li><a href="index.html" class="animate-link">One-to-All</a></li>
            <li><a href="pair.html" class="animate-link">Pair Conversion</a></li>
          </ul>
          <button class="hamburger hambefore"></button> 
      </nav>
      </div>
      `

    const hamburger = this.shadowDOM.querySelector('.hamburger')
    const navLinks = this.shadowDOM.querySelector('.nav-links')
    this.shadowDOM.querySelector('.hamburger').addEventListener('click', () => {
      navLinks.classList.toggle('open')
      hamburger.classList.toggle('hamafter')
    })
  }
}

customElements.define('app-bar', AppBar)
