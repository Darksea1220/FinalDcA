import sugdata from "../../sugdata.js";
import MySuggestions, {Attribute} from "../Suggestions/Suggestions.js";
class MySuggestionContainer extends HTMLElement{
    suggested:MySuggestions[]=[];
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        sugdata.forEach((p)=>{
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions") as MySuggestions;
            suggestionsCard.setAttribute(Attribute.img, p.img);
            suggestionsCard.setAttribute(Attribute.name, p.name);
            this.suggested.push(suggestionsCard);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            this.suggested.forEach((suggestions)=>{
                this.shadowRoot?.appendChild(suggestions);
            });
        }
    }

}
customElements.define("my-sugcont", MySuggestionContainer);
export default MySuggestionContainer;