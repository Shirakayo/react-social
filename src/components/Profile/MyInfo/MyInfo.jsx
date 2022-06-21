import card from "./MyInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const MyInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <section className={card.info}>
            <div className={card.avatar_img}>
                <img src={props.profile.photos.small} alt=""/>
            </div>
            <div>
                <div className={card.title}>{props.profile.fullName}</div>
                <div className={card.subtitle}>{props.profile.lookingForAJobDescription}</div>
            </div>
        </section>
    )
}

export default MyInfo