(() => {

    console.log("fired");

    const   burger = document.querySelector(".burger"),
            nav    = document.querySelector(".mainNav");
    
    function toggleBurger() {

		burger.classList.toggle("rotate");
		nav.classList.toggle("hidden");
    }

    burger.addEventListener("click", toggleBurger);
    

})();