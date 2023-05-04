const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
    <style>
        .item-footer{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
    
    <footer class="item-footer">
        <p>Derechos reservados &copy; 2023</p>
    </footer>
`;

class ComponentFooter extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
    }
}

window.customElements.define("app-component-footer", ComponentFooter);