export enum Attribute {
    "img" = "img",
    "name" = "name",
}
class MySuggestions extends HTMLElement{
    img?: string;
    name?: string;
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            img: null,
            name: null
        };
        return Object.keys(attrs); 
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName:Attribute, oldValue:string|undefined, newValue:string){
        this[propName] = newValue;
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Suggestions/Suggestions.css">
            <div class="igprofile">
                <img class="iglogo" src="${this.img}" alt="imagen de perfil de ${this.name}"></img>
                <div class="igname">
                    <div class="nameig">${this.name}</div>
                    <div class="nameig"id="ioa">Recomendado por Instagram</div>
                    </div>
                    <p class="cambiar">Seguir</p>
            </div>
            `;
        } 
    }
}
customElements.define("my-suggestions", MySuggestions);
export default MySuggestions;
