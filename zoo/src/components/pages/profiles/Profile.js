
import { VisitorProfile } from './VisitorProfile';
import { GSMProfile } from './GSMProfile';
export function Profile(props){
    var profile = <></>;
    if(props.user)
        switch (props.user.type) {
            case "visitor":
                profile = <VisitorProfile user={props.user} fail={props.fail} success={props.success}/>
                break;    
            case "giftshopManager":
                profile = <GSMProfile user={props.user} fail={props.fail} success={props.success}/>
                break;    
                    
            default:
                break;
        }

    return profile;
}