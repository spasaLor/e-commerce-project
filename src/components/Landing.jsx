import "../styles/landing.css";
import "../App.css";

export default function Landing(){
    return(
    <>
        <section className="hero">
            <h1>Hazy shade of spring</h1>
            <i className="latin">Quisque lorem tortor frigilla sed, vestibulum id, elifend justo.</i>
            <button type="button">Check new arrivals</button>
        </section>
        <section className="grid-section">
            <div id="grid-item1">
                <h2>heather grey basics</h2>
                <p>new arrival</p>
            </div>
            <div id="grid-item2">
                <em>Opening ceremony @Indonesia FW tomorrow, PMers! Are you ready for the biggest fashion movement in </em>
                <b>@PuspitamarthaID</b>
            </div>
            <div id="grid-item3"></div>
            <div id="grid-item4">
                <h2>elegant shoes</h2>
                <p>braided leather</p>
            </div>
            <div id="grid-item5">
                <h2>chuck taylors</h2>
                <p>€125.00</p>
            </div>
            <div id="grid-item6">
                <em>Girls, Girls, Girls: A look back at 50 years of the Pirelli Calendar</em>
                <b>@Vogue</b>
            </div>
            <div id="grid-item7">
                <h2>jeans for adventure</h2>
                <p>new arrival</p>
            </div>
            <div id="grid-item8"></div>
            <div id="grid-item9">
                <h2>Jaxon hat</h2>
                <p>beanie hat</p>
            </div>
            <div id="grid-item10">
                <h2>basic blazer</h2>
                <p>from €199.00</p>
            </div>
        </section>
        <section className="newsletter">
            <div className="text">
                <h2>sign up to receive our updates</h2>
                <i>Nulla ipsum dolor iacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.</i>
            </div>
            <div className="inputs">
                <input type="email" placeholder="Your e-mail"/><button type="button">add</button>
            </div>
        </section>
    </>
        
    );
}