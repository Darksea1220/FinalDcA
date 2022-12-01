import data from "../../data.js";
import MyProfile, {Attribute} from "../Profiles/Profiles.js";
class MyProfileContainer extends HTMLElement{
    profiles:MyProfile[]=[];
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        data.forEach((p)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
            profileCard.setAttribute(Attribute.img, p.img);
            profileCard.setAttribute(Attribute.name, p.name);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            });
        }
    }

}
customElements.define("my-pcont", MyProfileContainer);
export default MyProfileContainer;