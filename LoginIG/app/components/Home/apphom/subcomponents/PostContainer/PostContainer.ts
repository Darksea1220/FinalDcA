import {listenPost} from "../../../../../services/db.js";

class MyPostContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    async connectedCallback(){

        listenPost((igdata)=>{
            console.log(igdata);
            
            this.render(igdata);
        })
    }
    render(igdata?){
        if(this.shadowRoot){

            const print = igdata.map(p=>{
                return `<my-post profileimg="${p.data.profileimg}" name="${p.data.name}" ubication="${p.data.ubication}" post="${p.data.post}" views="${p.data.views}" description="${p.data.description}"></my-post>`
            });
            this.shadowRoot.innerHTML= print.join('');
        }
    }
}
customElements.define("my-postcont", MyPostContainer);
export default MyPostContainer;