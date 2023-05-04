const templateHeader = document.createElement('template');
templateHeader.innerHTML = `
    
    <style>
        .container-header{
            height: ;
            display: flex;
        }
        .logo{
            width: 4rem;
            margin: 5px 0 0 5px;
            height: 4rem;
            justify-content: center;
            align-items: center;
        }    
    </style>
    
    <header class="item-header">
        <div class="container-header">
            <div class="image-content">
                <img class="logo" src="/images/browser-1.png" alt="">
            </div>
            <div class="icon-title">
                <span></span>
            </div>
            <div class="icon-sing-in">
                <i class="fa-sharp fa-light fa-user"></i>
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
}

window.customElements.define("app-component-header", ComponentHeader);