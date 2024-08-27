import "./styles.css";

const menuDOMController = (function () {

    const content = document.getElementById("content");

    function renderMenu() {
        content.innerHTML = "";

        const html = `
        <div class="black-background">
                <div class="menu">
                    <h1>Menu</h1>
                    <ul>
                        <li>
                            <p>Breakfast Burrito</p>
                            <p>Scrambled eggs, cheddar cheese, chives, and your choice of chicken, bacon, or sausage
                                wrapped in a warm flour tortilla</p>
                            <p>Price: $7.99</p>
                        </li>
                        <li>
                            <p>Avocado Toast</p>
                            <p> Toasted sourdough bread topped with mashed avocado, cherry tomatoes, and feta cheese</p>
                            <p>Price: $8.99</p>
                        </li>
                        <li>
                            <p>Tomato Soup</p>
                            <p>Our signature soup made with fresh tomatoes and basil, served with a side of croutons</p>
                            <p>Price: $6.99</p>
                        </li>
                        <li>
                            <p>Grilled Cheese</p>
                            <p>Our classic grilled cheese sandwich made with melted cheddar cheese on sourdough bread,
                                served with a side of tomato soup</p>
                            <p>Price: $7.99</p>
                        </li>
                        <li>
                            <p>Pizza</p>
                            <p>A classic margherita pizza with fresh tomato sauce, mozzarella cheese, and basil, served
                                with a side salad</p>
                            <p>Price: $10.99</p>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        console.log("rendering menu");
        content.innerHTML = html;
    }

    return { renderMenu };

})();

export default menuDOMController;