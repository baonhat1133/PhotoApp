export interface bannerElement {
    title:string,
    backgroundUrl:string
}

function Banner({title, backgroundUrl}:bannerElement) {
    const bannerStyle=backgroundUrl?{backgroundImage:`url(${backgroundUrl})`}:{};
    return (
       <section className="banner" style={bannerStyle} >
            <h2 className="title-banner">{title}</h2>
       </section>
    );
}

export default Banner;