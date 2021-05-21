class DoubleQuit extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.c_price = this.getAttribute("price");
    }

    get price() {
        return this.getAttribute("price");
    }

    set price(val) {
        this.setAttribute("price", val);
    }

    get cardNumber() {
        return this.getAttribute("cardNumber");
    }

    set cardNumber(val) {
        this.setAttribute("cardNumber", val);
    }

    static get observedAttributes(){
        return ["price","cardNumber"];

    }

    attributeChangedCallback(prop, oldVal, newVal){
        if (prop === "price") {
            this.render();
            let btn = this.shadow.querySelector('#btn');
            btn.addEventListener("click", this.res.bind(this));
            let cardNumber = this.shadow.querySelector('#cardNumber')
            cardNumber.setAttribute("cardNumber", this.bind(this.cardNumber))
        };
    }

    res() {
        var rand_bool = Math.random() < 0.5;
        if (rand_bool){
            console.log("DOH")
            this.price = this.c_price*2
        } else {
            console.log("NICE")
            this.price = 0
        }
    }

    connectedCallback() {
        this.render();
        let btn = this.shadow.querySelector('#btn');
        btn.addEventListener("click", this.res.bind(this));
        let cardNumber = this.shadow.querySelector('#cardNumber')
        cardNumber.setAttribute("cardNumber", this.bind(this.cardNumber))
    }

    render() {
        this.shadow.innerHTML = `
        <style>
            div#card {
                display: none;
                border: solid black 1px;
            }

            input.details{
                border: solid grey 1px
            }
        </style>

        <div id="dq">
            <button onClick>Double Or Quits</button>
            <div id="card">
                <input type="text" id="cardNumber" name="cardNumber" required size="10" placeholder="${this.cardNumber}">
                <input type="text" id="expiry" name="expiry" required size="10" placeholder="expiry">
                <input type="text" id="cvc" name="cvc" required size="10" placeholder="cvc">
                ${this.price}
            <button id="btn">D/Q</button>
            </div>
            
        </div>
        `;
    }

}

customElements.define('double-or-quits', DoubleQuit)