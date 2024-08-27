import "./styles.css";
import carousel1Url from "./images/carousel1.webp?url";


const homeDOMController = (function () {

    const content = document.getElementById("content");

    function renderHome() {
        content.innerHTML = "";

        const html = `
        <div class="black-background">
            <div class="image-card">
                <img src="${carousel1Url}" alt="" loading="lazy">
            </div>
            <div class="welcome">
                <h1>
                    Welcome to our restaurant
                </h1>
                <p>
                    At our restaurant, we pride ourselves in serving the freshest ingredients, 
                    carefully prepared to provide you with an unforgettable dining experience. 
                    Whether you're in the mood for a classic dish or something more adventurous, our menu has something for everyone. 
                    We're proud to be a part of this community and look forward to serving you.
                    
                </p>
            </div>
        </div>`;

        console.log("rendering home");
        content.innerHTML = html;
    }

    return { renderHome };

})();

export default homeDOMController;
