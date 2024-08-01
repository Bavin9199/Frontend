        let items = document.querySelectorAll('.item');
        let dots = document.querySelectorAll('.dots li');
        let current = 0;
        function showSlide() {
            items.forEach(item => {
                item.style.transform = `translateX(-${current * 100}%)`;
            });
            updateDots();
        }
 
        function prevSlide() {
            if (current > 0) {
                current--;
            } else {
                current = items.length - 1;
            }
            showSlide();
        }
 
        function nextSlide() {
            if (current < items.length - 1) {
                current++;
            } else {
                current = 0;
            }
            showSlide();
        }
        function updateDots() {
            dots.forEach(dot => {
                dot.className.replace(' active',"");
            });
            dots[current].className += " active";
        }
 
        function jumpToSlide(index) {
            current = index;
            showSlide();
            
        }
