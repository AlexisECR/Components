const templateRoot = document.createElement('template');
templateRoot.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        
        html, body {
            font-family: Roboto, serif;
        }

        .item-root {
            height: 100vh;
            display: grid;
            grid-template-columns: 5rem 1fr;
            grid-template-rows: 2.5rem 1fr 3rem;
            grid-template-areas:
                "aside header"
                "aside content"
                "aside footer";
        }
    </style>
    
    <div class="item-root">
        <app-component-header></app-component-header>
        <app-component-sidebar></app-component-sidebar>
        <app-component-main></app-component-main>
        <app-component-footer></app-component-footer>
    </div>   
    
`;

class ComponentRoot extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateRoot.content.cloneNode(true));
    }
}

window.customElements.define("app-component-root", ComponentRoot);