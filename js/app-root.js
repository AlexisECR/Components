const templateRoot = document.createElement('template');
templateRoot.innerHTML = `
    <style>
    
        html, body {
            font-family: Roboto, serif;
        }
        
        .item-root{
            height: 100vh;
            display: grid;
            grid-template-columns: 4rem 1fr;
            grid-template-rows: 5rem 86% 1fr;
            grid-template-areas:
            "aside header"
            "aside content"
            "aside footer";
        }
        
         app-component-header {
            grid-area: header;
            background-color: rgba(0,150,136,255);
        }
        
        app-component-sidebar{
            grid-area: aside;
            background-color: rgba(39,54,62,255);
        }        
        
        app-component-main{
            grid-area: content;
            background-color: rgba(228,228,228,255);
        }
        
        app-component-footer{
            grid-area: footer;
            background-color: white;
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