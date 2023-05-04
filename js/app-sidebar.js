const templateSideBar = document.createElement('template');
templateSideBar.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        
        .item-aside{
            display: grid;
            height: 100%;
            max-height: 100vw;
        }
                    
        .icon-bar {
            background-color: rgba(39,54,62,255);
        }
        
        .icon-bar a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 4rem;
            text-align: center;
            transition: all 0.3s ease;
            color: white;
            font-size: 1.5rem;
        }
        
        .icon-bar a:hover {
            background-color: rgba(30,39,44,255);
        }

        .active {
            background-color: rgba(30,39,44,255);
        }
    </style>
    
    <aside class="item-aside">
        <div class="icon-bar">
            <a class="active" href="#"><i class="fa fa-home"></i></a>
            <a href="#"><i class="fa fa-search"></i></a>
            <a href="#"><i class="fa fa-envelope"></i></a>
            <a href="#"><i class="fa fa-globe"></i></a>
            <a href="#"><i class="fa fa-trash"></i></a>
        </div>
    </aside>
`;

class ComponentSideBar extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateSideBar.content.cloneNode(true));
    }
}

window.customElements.define("app-component-sidebar", ComponentSideBar);