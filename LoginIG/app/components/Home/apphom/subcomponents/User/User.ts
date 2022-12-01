export enum Attribute {
    "clase" = "clase",
    "image" = "image",
}
class MyUser extends HTMLElement{
    clase?:string;
    image?: string;
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            clase:null,
            image: null,
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
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/User/User.css">
                <div> 
                    <img class="${this.clase}"src="${this.image}" alt="foto de perfil de usted"></img>
                </div>
            `;
        } 
        
    }

}
customElements.define("my-user", MyUser);
export default MyUser;