const templateRoot = document.createElement('template');
templateRoot.innerHTML = `
    <style>
    
        html, body {
            font-family: Roboto, serif;
        }
        
        .item-root{
            height: 100vh;
            display: grid;
            grid-template-columns: 3rem 1fr;
            grid-template-rows: 3rem 89% 1fr;
            grid-template-areas:
            "aside header"
            "aside content"
            "aside footer";
        }
        
        button{
            height: 20px;
            width: 40px;
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
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(templateRoot.content.cloneNode(true));
        console.log(shadow);
    }

    connectedCallback() {
        this.shadowRoot.addEventListener('OpenMenu', (e) => {
            this.shadowRoot.querySelector('.item-root').style.gridTemplateColumns = '15rem 1fr';
            this.shadowRoot.querySelector('app-component-sidebar').querySelector('.icon-bar').style.display = 'flex';
        });
    }
}

customElements.define("app-component-root", ComponentRoot);