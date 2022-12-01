export enum Attribute {
    "img" = "img",
    "name" = "name",
}
class MyProfile extends HTMLElement{
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
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Profiles/Profiles.css">
                <div class="perfil"> 
                     <img class="picture" src="${this.img}" alt="foto de perfil de ${this.name}"></img>
                     <p>${this.name}</p>
                </div>
            `;
        } 
        
    }

}
customElements.define("my-profile", MyProfile);
export default MyProfile;