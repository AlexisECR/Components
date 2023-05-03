const templateSideBar = document.createElement('template');
templateSideBar.innerHTML = `
    
    <style>
        .item-aside{
            display: grid;
            grid-area: aside;
            background-color: rgba(39,54,62,255);
        }
        .icon-bar {
            width: 5rem;
            height: 2.5rem;
            background-color: rgba(39,54,62,255);
        }
        
        .icon-bar a {
            display: block;
            text-align: center;
            padding: 10px;
            transition: all 0.3s ease;
            color: white;
            font-size: 1rem;
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