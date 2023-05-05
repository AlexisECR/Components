const templateHeader = document.createElement('template');
templateHeader.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <style>
        .container-header{
            display: flex;
            justify-content: space-between;
            padding: 0 25px 0 10px;
        }
        
        .icon-menu i{
            font-size: 2.5rem;
            color: white;
            cursor: pointer;
        }
      
        .icon-user i{
            font-size: 2.3rem;
            color: white;
            cursor: pointer;
        }    
        
    </style>
    
    <header class="item-header">
        <div class="container-header">
            <div class="icon-menu">
                <i class="bi bi-list"></i>
            </div>
            <div class="icon-user">
               <i class="bi bi-person"></i>
            </div>
                
        </div>
    </header>
`;

class ComponentHeader extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateHeader.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('.icon-menu').addEventListener('click', () => {
            const messageEvent = new CustomEvent("OpenMenu", {
                detail: {'grid-template-columns': '10rem 1fr'} ,
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(messageEvent);
        });
    }
}

window.customElements.define("app-component-header", ComponentHeader);