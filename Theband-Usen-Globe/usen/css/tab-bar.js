//
    $(document).ready(function(){

        //----slick-header----
        var acc = document.getElementsByClassName("accordion");
             var i;
            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

         //-----tab-bar-------
    let menubar = document.querySelector('.bar_920');
    let menubtn = document.querySelector('.bar_mobile');
    let overlay = document.querySelector('.overlay_bar');
    let close = document.querySelector('.mobile_close');
    overlay.addEventListener('click',function(){
        overlay.classList.remove('active')
        menubar.classList.remove("active");
    })
    menubtn.addEventListener('click',function(){
        menubar.classList.add("active");
        overlay.classList.add('active')
    })
    close.addEventListener('click',function () {  
        menubar.classList.remove("active");
        overlay.classList.remove('active')
    })


    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.header').addClass('sticky')
        }
        else
            $('.header').removeClass('sticky')
    })

    })

//

    

