import { define, html }from "hybrids";
import styles from "./style.css";
import double from './double.jpeg';
import quits from './quits.jpeg';


function setFate(host, basketprice) {
  const result = host.shadowRoot.getElementById("fate");
  if (result.classList.contains("hidden")){
    result.className ="";
    result.classList.add("visible");
  } else {
    result.className ="";
    result.classList.add("hidden");
  }
  var fate = Math.random() < 0.5;

  if (fate) {
    host.shadowRoot.getElementById("resultimage").src = double;
  } else {
    host.shadowRoot.getElementById("resultimage").src = quits;
  }  
}

function expandCardPanel(host){
  const cardPanel = host.shadowRoot.getElementById("paymentPanel");
  if (host.visibility == 'hidden'){
    host.visibility = 'visible'
  } else {
    host.visibility = 'hidden'
  }
  cardPanel.className = "";
  cardPanel.classList.add(host.visibility)
}


export const DoubleOrQuits = {
  fate: false,
  basketprice: '0.00',
  visibility : 'hidden',
  itemname : "",
  resultimage : "",
  render: ({ basketprice, itemname }) => html`
  <style>${styles}</style>
  <script src="src/wheel.js"></script>

  <div id="result" class="hidden">yh</div>

  <div id="container">

    <button id="dq" onclick="${expandCardPanel}">
          <span id="ddd">Double</span><span id="o">Or</span><span id="q">Quits</span>
    </button>
    <span id="productDescription">
      Pay double, or <b>pay nothing.</b>
    </span>

    <div id="paymentPanel" class="hidden">

      <div id="cardDetails">
        <input type="text" placeholder="0000 0000 0000 0000" />
        <div></div>
        <input type="text" placeholder="00/00" />
        <input type="text" placeholder="000" />
        <input type="text" placeholder="A1A1AA" />
      </div>

      <div id="basePrice">
        <p>${itemname} will cost £0.00... or pay £${basketprice * 2}</p>
      </div>
      <div id="terms">
        <input type="checkbox" id="tc" name="tc">
        <label for=""tc">Some very stringent Ts and Cs which involve no refunds if it ends up as 'double'.</label>
      </div>
      <div id="fate" class="hidden"><img id="resultimage"/></div>
      <span id="totalcost"></span>

      <button id="fuckit" onclick="${setFate}">Gamble Now!!!</button>

    </div>

  </div>
  `,
};

define('double-or-quits', DoubleOrQuits);
