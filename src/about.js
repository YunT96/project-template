import "./styles.css";


const aboutDOMController = (function () {

    const content = document.getElementById("content");

    function renderAbout() {
        content.innerHTML = "";
        
        const html = `
        <div class="black-background">
        <div class="about">
        <div>
            <h1>About</h1>
            <p>
                Our restaurant is a place where friends and family can come together to share
                a meal and make memories. We strive to create a warm and welcoming atmosphere,
                where everyone can feel at home.
            </p>
        </div>
        <div>
            <h2>Contact</h2>
            <p>
                Phone: 555-555-5555
            </p>
            <p>
                Email: 0vqg3@example.com
            </p>
        </div>
        <div>
            <h2>Hours</h2>
            <p>
                Monday - Friday: 11am - 11pm
            </p>
            <p>
                Saturday - Sunday: 11am - 9pm
            </p>
        </div>
        <div>
            <h2>Location</h2>
            <p>
                123 Main Street
                Anytown, USA
            </p>
        </div>
    </div>

</div>
        `;
        console.log("rendering about");
        content.innerHTML = html;
    }

    return { renderAbout };

})();

export default aboutDOMController;


