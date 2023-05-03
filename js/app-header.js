const templateHeader = document.createElement('template');
templateHeader.innerHTML = `
    <style>
        .item-header{
            display: grid;
            grid-area: header;
            background-color: rgba(0,150,136,255);
        }
        
        .container {
            padding-left: 3px;
            display: inline-block;
            cursor: pointer;
        }

        .bar1, .bar2, .bar3 {
            width: 35px;
            height: 5px;
            background-color: rgba(239, 239, 239, 1);
            margin: 6px 0;
            transition: 0.4s;
        }
        
        .change .bar1 {
            transform: translate(0, 11px) rotate(-45deg);
        }
        
        .change .bar2 {opacity: 0;}
        
        .change .bar3 {
            transform: translate(0, -11px) rotate(45deg);
        }
    </style>
    
    <header class="item-header">
        <div class="container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </header>
     
`;

class ComponentHeader extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateHeader.content.cloneNode(true));
    }
}

window.customElements.define("app-component-header", ComponentHeader);