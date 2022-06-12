import card from "./MyInfo.module.css"

const MyInfo = () => {
    return (
        <section className={card.info}>
            <div className={card.avatar_img}>
                <img src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-51.jpg" alt=""/>
            </div>
            <div>
                <div className={card.title}>Andrey Pugachev</div>
                <div className={card.subtitle}>Middle Frontend Developer</div>
            </div>
        </section>
    )
}

export default MyInfo