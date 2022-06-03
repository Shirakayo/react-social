import card from "./MyInfo.module.css"

const MyInfo = () => {
    return (
        <section>
            <div className={card.avatar_img}>
                <img src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-51.jpg" alt=""/>
            </div>
            <div>
                Info about profile
            </div>
        </section>
    )
}

export default MyInfo