const templateMain = document.createElement('template');
templateMain.innerHTML = `
    <style>
        .item-main{
            display: grid;
            grid-area: content;
            background-color: rgba(228,228,228,255);
        }
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