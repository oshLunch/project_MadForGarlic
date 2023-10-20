$(function () {
    // 헤더 2차메뉴
    let depth01 = $('header .pc .gnb .depth01');
    let pcA = $('header .pc .gnb .depth01 > a');
    let pcA2 = $('header .pc .gnb .depth01 .depth02');
    let pcLi = $('header .pc .gnb .depth01');

    pcA.mouseenter(function () {
        pcLi.removeClass('on');
        $(this).parent().addClass('on');
    });

    depth01.mouseleave(function () {
        pcLi.removeClass('on');
    })

    pcA2.mouseleave(function () {
        pcLi.removeClass('on');
    });

    // 스크롤시 헤더 색상 변경
    let cont01Top = $('.cont01').offset().top;
    let cont02Top = $('.cont02').offset().top;
    let cont03Top = $('footer').offset().top;
    let membership = $('.cont03 .membership .list');
    let sidebarP = $('.side_bar > div p');

    $(window).scroll(function () {
        if (cont01Top < $(window).scrollTop()) {
            sideBar.show();
            $('header').css({
                'background-color': 'rgba(0, 0, 0, 0.7)',
                'border-bottom': 'none',
                'transition': '0.3s'
            });
        } else {
            $('header').css({
                'background-color': 'black',
                /* 'border-bottom': '1px solid white', */
                'transition': '0.3s'
            });
        }
    });


    // 모바일 메뉴
    let mobileBtn = $('header .mobile_menu');
    let closeBtn = $('header .mobile_join li:last-child');
    let mobileNav = $('header .mobile_gnb');
    let mobileBg = $('header .mobile_bg');
    let mDepth01 = $('header .mobile_gnb .gnb .depth01');
    let mDepth02 = $('header .mobile_gnb .gnb .depth01 .depth02');
    let mA = $('header .mobile_gnb .gnb .depth01>a');
    let back = $('header .mobile_gnb .back');

    mobileNav.css({
        'right': -$(window).width()
    })

    closeBtn.css({
        'right': -$(window).width()
    })

    // 화면 크기 감지하여 
    $(window).resize(function () {
        if (mobileNav.css('right') != '0px') {
            mobileNav.css({
                'right': -$(window).width()
            })

            closeBtn.css({
                'right': -$(window).width()
            })
        }
    });

    // 화면 크기 감지하여 모바일 메뉴창 사라지게 만들기
    $(window).resize(function () {
        if ($(window).width() > 960) {
            mobileBg.removeClass('on');
            mDepth01.removeClass('on');
            mA.removeClass('on');
            closeBtn.css({
                'right': -$(window).width()
            })
            mobileNav.css({
                'right': -$(window).width()
            })
            mDepth02.css({
                'right': -$(window).width()
            })
            $('body').css({
                'position': 'relative',
                'width': 'auto'
            })
        }
    })

    // 모바일 메뉴버튼 클릭시 펼쳐짐
    mobileBtn.click(function () {
        mobileBg.addClass('on');
        closeBtn.animate({
            'right': '80%'
        })
        mobileNav.animate({
            'right': '0'
        })
        $('body').css({
            'position': 'fixed',
            'width': '100%'
        })
    })

    // 닫기버튼 클릭시 빠져나옴
    closeBtn.click(function () {
        mobileBg.removeClass('on');
        mDepth01.removeClass('on');
        mA.removeClass('on');
        closeBtn.animate({
            'right': -$(window).width()
        })
        mobileNav.animate({
            'right': -$(window).width()
        })
        mDepth02.css({
            'right': -$(window).width()
        })
        $('body').css({
            'position': 'relative',
            'width': 'auto'
        })
    })

    // 2차메뉴 없는 리스트 클릭시 빠져나옴
    back.click(function () {
        mobileBg.removeClass('on');
        mDepth01.removeClass('on');
        mA.removeClass('on');
        closeBtn.animate({
            'right': -$(window).width()
        })
        mobileNav.animate({
            'right': -$(window).width()
        })
        mDepth02.css({
            'right': -$(window).width()
        })
        $('body').css({
            'position': 'relative',
            'width': 'auto'
        })
    })

    // 배경 클릭시 빠져나옴
    mobileBg.click(function () {
        mobileBg.removeClass('on');
        mDepth01.removeClass('on');
        mA.removeClass('on');
        closeBtn.animate({
            'right': -$(window).width()
        })
        mobileNav.animate({
            'right': -$(window).width()
        })
        mDepth02.css({
            'right': -$(window).width()
        })
        $('body').css({
            'position': 'relative',
            'width': 'auto'
        })
    })

    // 모바일 2차 메뉴
    let mobileTop = $(mobileNav).scrollTop();
    console.log(mobileTop); // mobileNav 위치값

    mDepth02.css({
        'right': -$(window).width()
    })

    // 창 크기에 따른 2차메뉴 높이
    if ($(window).width() > 414) {
        if ($(window).height() <= 460) {
            mDepth02.css({
                'height': '100%'
            })
        } else {
            mDepth02.css({
                'height': 'calc(100vh - 50px)'
            })
        }
    } else {
        if ($(window).height() <= 250) {
            mDepth02.css({
                'height': '100%'
            })
        } else {
            mDepth02.css({
                'height': 'calc(100vh - 50px)'
            })
        }
    }

    // 2차메뉴 클릭시 이벤트
    mA.click(function () {
        if ($(this).next().css('right') == '0px') {
            mA.removeClass('on');
            $(this).next().animate({
                'right': -mobileNav.width()
            })
        } else {
            mA.removeClass('on');
            $(this).addClass('on');
            mDepth02.css({
                'right': -mobileNav.width()
            })
            $(this).next().animate({
                'right': '0'
            })
        }
    })

    // cont01 메뉴 네비게이션
    let menuTag = $('.cont01 .inner nav .tag');
    let menuNav = $('.cont01 .inner nav .tag li');
    let menuList = $('.cont01 .inner .menu_list');

    menuNav.click(function () {
        menuNav.removeClass('on');
        $(this).addClass('on');

        menuList.removeClass('on');
        menuList.eq($(this).index()).addClass('on');
    })

    // cont01 메뉴태그 마우스로 슬라이드
    var clicked = false, clickX;
    menuTag.on({
        'mousemove': function (e) {
            clicked && updateScrollPos(e);
        },
        'mousedown': function (e) {
            e.preventDefault();
            clicked = true;
            clickX = e.pageX;
        },
        'mouseup': function () {
            clicked = false;
            $('html').css('cursor', 'auto');
        }
    });

    var updateScrollPos = function (e) {
        menuTag.css('cursor', 'grabbing');
        menuTag.scrollLeft(menuTag.scrollLeft() + (clickX - e.pageX));
    }

    // cont01 메뉴 슬라이드
    var swiper = new Swiper(".menu_list", {
        centeredSlides: true,
        loop: true,
        /* pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }, */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    // cont02 프로모션 슬라이드
    const progressCircle = document.querySelector(".autoplay-progress svg");
    let slideActive = $('.cont02 .swiper-slide-active');

    var swiper1 = new Swiper(".promotion", {
        slidesPerView: "1",
        centeredSlides: true,
        spaceBetween: 50,
        loop: true,
        breakpoints: {
            1276: {
                slidesPerView: 3,
                spaceBetween: 150,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
            }
        }
    });

    // cont02 프로모션 컨트롤
    $('.play').hide();

    $('.stop').click(function () {
        swiper1.autoplay.stop();

        $('.stop').hide();
        $('.play').show();
    });

    $('.play').click(function () {
        swiper1.autoplay.start();

        $('.play').hide();
        $('.stop').show();
    });

    // 스크롤시 cont03 아이템 드러내기
    let membershipMore = $('.cont03 .membership > a');

    $(window).scroll(function () { /* $(window).scrollTop() >= '2300' */
        if ($(window).width() <= 960 && $(window).width() > 850) {
            if ($(window).scrollTop() > cont02Top) {
                membership.css({
                    'bottom': '80px',
                    'opacity': '1',
                    'transition': '2.5s'
                })
            } else {
                membership.css({
                    'bottom': '10px',
                    'opacity': '0',
                    'transition': '2.5s'
                })
            }

        } else {
            if ($(window).scrollTop() > cont02Top) {
                membership.css({
                    'bottom': '140px',
                    'opacity': '1',
                    'transition': '2.5s'
                })
            } else {
                membership.css({
                    'bottom': '30px',
                    'opacity': '0',
                    'transition': '2.5s'
                })
            }
        }
    });

    // 사이드바 나타나게 하기
    let sideBar = $('footer .side_bar');

    sideBar.hide();

    $(window).scroll(function () {
        if ($(window).width() <= '1275' && $(window).width() > '650') {
            if (cont01Top / 2 < $(window).scrollTop()) {
                sideBar.css({
                    'display': 'flex'
                });
            } else {
                sideBar.hide();
            }

        } else if ($(window).width() <= '650') {
            sideBar.hide();

        } else {
            if (cont01Top / 2 < $(window).scrollTop()) {
                sideBar.css({
                    'display': 'flex'
                });
            } else {
                sideBar.hide();
            }
        }
    });

    // 사이드바 TOP 누를시 위로가기
    $('.side_bar .top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    })

    // 사이드바 호버 이펙트
    let reservation = $('.side_bar .reservation');
    let store = $('.side_bar .store');
    let reservationImg = $('.side_bar .reservation .frame img');
    let storeImg = $('.side_bar .store .frame img');
    let reservationFrame = $('.side_bar .reservation .frame');
    let storeFrame = $('.side_bar .store .frame');

    reservation.mouseenter(function () {
        reservationImg.attr('src', 'img/footer/side_bar/reservation_icon.png');
        reservationFrame.css({
            'background-color': 'rgba(255, 255, 255, 0.6)',
            'border': '2px solid rgba(0, 0, 0, 0.6)',
            'transition': 'background-color 0.5s'
        })
    });

    reservation.mouseleave(function () {
        reservationImg.attr('src', 'img/footer/side_bar/reservation_icon_white.png');
        reservationFrame.css({
            'background-color': 'rgba(0, 0, 0, 0.6)',
            'border': 'none'
        })
    });

    store.mouseenter(function () {
        storeImg.attr('src', 'img/footer/side_bar/shop_icon_black.png');
        storeFrame.css({
            'background-color': 'rgba(255, 255, 255, 0.6)',
            'border': '2px solid rgba(0, 0, 0, 0.6)',
            'transition': 'background-color 0.5s'
        })
    });

    store.mouseleave(function () {
        storeImg.attr('src', 'img/footer/side_bar/shop_icon_white.png');
        storeFrame.css({
            'background-color': 'rgba(0, 0, 0, 0.6)',
            'border': 'none'
        })
    });


    // footer에 가까워지면 사이드바 글자색 흰색으로 변경
    /* $(window).scroll(function () {
        if ($(window).scrollTop() > (cont01Top - $('.cont01').height())) {
            sidebarP.css({
                'color': 'white',
                'text-shadow': 'none'
            })
        } else {
            sidebarP.css({
                'color': 'black',
                'text-shadow': 'none'
            })
        }
    }) */

    // 화면 줄었을 때 사이드바 글씨 변경
    /* $(window).scroll(function () {
        if ($(window).width() <= '1275') {
            if ($(window).scrollTop() > cont03Top / 2) {
                sidebarP.css({
                    'color': 'white',
                    'text-shadow': '-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black'
                })
            } else {
                sidebarP.css({
                    'color': 'black',
                    'text-shadow': 'none'
                })
            }
        } else {
        }
    }); */

    // 창 넓이 850px 이하일 때 더보기 버튼
    let moreBtn = $('footer nav .f_gnb .btn_case .more_btn');
    let span1 = $('footer nav .f_gnb .btn_case .more_btn span:nth-child(1)');
    let fDepth02 = $('footer nav .f_gnb .f_depth01 .f_depth02');
    let fLa02 = $('footer nav .f_gnb .f_depth01 .f_depth02 li a');
    let fGnb = $('footer nav .f_gnb');

    moreBtn.click(function () {
        if (span1.css('height') == '15px') {
            moreBtn.addClass('on');
            fDepth02.slideDown();
        } else {
            moreBtn.removeClass('on');
            fDepth02.slideUp();
        }
    })

    fLa02.click(function () {
        moreBtn.removeClass('on');
        fDepth02.slideUp();
    })
});