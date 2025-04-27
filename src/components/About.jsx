import "../styles/about.css";

export default function About(){

    return(
        <section className="about">
            <div className="mid">
                <p>Home / about</p>
            </div>
            <div className="main">
                <h2>about</h2>
                <i>Lorem ipsum dolor sit amet enim. Etiam uillacorp uspendisse a pellentesque.</i>
            </div>
            <div className="bottom">
                <div className="left">
                    <h3>Who are we?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida elit et eros porta, eu vulputate lorem dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas aliquet tempus massa, quis mattis neque accumsan fermentum. Maecenas neque sem, auctor vel quam sit amet, pharetra pretium sem.</p>
                </div>
                <div className="right">
                    <h3>what are we doing?</h3>
                    <p>Ut imperdiet faucibus elit, ac feugiat nulla molestie eget. Donec ut ipsum nisl. Aenean condimentum, ipsum at sagittis mattis, libero magna convallis velit, sit amet consectetur odio elit nec mauris. Vivamus sagittis tellus ac justo finibus, eget egestas massa dictum. </p>
                </div>
            </div>
        </section>
    );
}