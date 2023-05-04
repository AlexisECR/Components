const templateMain = document.createElement('template');
templateMain.innerHTML = `
    <style>
        
    </style>
    <main class="item-main"></main>
`;

class ComponentMain extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateMain.content.cloneNode(true));
    }
}
window.customElements.define("app-component-main", ComponentMain);