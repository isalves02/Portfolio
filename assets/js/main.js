var splideCarousel = new Splide( '.splide', {
    type   : 'slide',
    gap: 30,
    perPage: 2,
    drag   : true,
    pagination: true,
    breakpoints: {
		768: {
            gap: 0,
			perPage: 1,
		},
    }
}).mount();


var menuToggle = document.querySelector('.nav .menu .menu-toggle');
menuToggle.addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
});


var activeButtons = document.querySelectorAll('.tools .btn-group button');
activeButtons.forEach(current => {
    current.addEventListener('click', function() {
        if (this.getAttribute('data-ref') == 'lang') {
            this.classList.add('active');
            document.querySelector('.lang-list').classList.add('active');

            if (document.querySelector('.tools-list').classList.contains('active')) {
                document.querySelector('.tools .btn-group [data-ref="tools"]').classList.remove('active');
                document.querySelector('.tools-list').classList.remove('active');
            }
        } else {
            this.classList.add('active');
            document.querySelector('.tools-list').classList.add('active');
            if (document.querySelector('.lang-list').classList.contains('active')) { 
                document.querySelector('.tools .btn-group [data-ref="lang"]').classList.remove('active');
                document.querySelector('.lang-list').classList.remove('active'); 
            }
        }
    });
});


if (window.innerWidth < 991) {
    var showProjectsLinks = document.querySelectorAll('.splide__slide__container');
    showProjectsLinks.forEach(project => {
        project.addEventListener('click', function() {
            var title = this.children[1];
            title.classList.toggle('active');
    
        });
    });
}