! function(e) {
    "use strict";
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(window).on("resize", (function() {
            e(".slick-slider").slick("refresh")
        })), e(".nice-select").length && e(".nice-select").niceSelect(), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
               
            }))
        })), e.fn.asmobilemenu = function(t) {
            var s = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "th-item-hth-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function a() {
                    t.toggleClass(s.bodyToggleClass);
                    var a = "." + s.subMenuClass;
                    e(a).each((function() {
                        e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                    }))
                }
                t.find("li").each((function() {
                    var t = e(this).find("ul");
                    t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").append(s.appendElement), t.next("a").append(s.appendElement)
                }));
                var n = "." + s.meanExpandClass;
                e(n).each((function() {
                    e(this).on("click", (function(t) {
                        var a;
                        
                    }))
                })), e(s.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        a()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), a()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").asmobilemenu(), e(window).on("scroll", (function() {
            var t = e(this).scrollTop();

            function s() {
                t > 400 && (e(".sticky-wrapper").addClass("sticky"), e(".sticky-wrapper").removeClass("will-sticky"))
            }
            s(), t > 150 ? (e(".sticky-wrapper").addClass("will-sticky"), s()) : (e(".sticky-wrapper").removeClass("sticky"), e(".sticky-wrapper").removeClass("will-sticky"))
        })), e(".scroll-top").length > 0) {
        var t = document.querySelector(".scroll-top"),
            s = document.querySelector(".scroll-top path"),
            a = s.getTotalLength();
        s.style.transition = s.style.WebkitTransition = "none", s.style.strokeDasharray = a + " " + a, s.style.strokeDashoffset = a, s.getBoundingClientRect(), s.style.transition = s.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var n = function() {
            var t = e(window).scrollTop(),
                n = e(document).height() - e(window).height(),
                i = a - t * a / n;
            s.style.strokeDashoffset = i
        };
        n(), e(window).scroll(n);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(t).addClass("show") : jQuery(t).removeClass("show")
        })), jQuery(t).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e(".th-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        var a = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
            n = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == s("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!s("dots"),
            fade: !!s("fade"),
            arrows: !!s("arrows"),
            speed: s("speed") ? s("speed") : 1e3,
            asNavFor: !!s("asnavfor") && s("asnavfor"),
            autoplay: 0 != s("autoplay"),
            infinite: 0 != s("infinite"),
            slidesToShow: s("slide-show") ? s("slide-show") : 1,
            adaptiveHeight: !!s("adaptive-height"),
            centerMode: !!s("center-mode"),
            autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
            centerPadding: s("center-padding") ? s("center-padding") : "0",
            focusOnSelect: 0 != s("focuson-select"),
            pauseOnFocus: !!s("pauseon-focus"),
            pauseOnHover: !!s("pauseon-hover"),
            variableWidth: !!s("variable-width"),
            vertical: !!s("vertical"),
            verticalSwiping: !!s("vertical"),
            prevArrow: s("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: s("next-arrow") ? n : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!s("xl-arrows"),
                    dots: !!s("xl-dots"),
                    slidesToShow: s("xl-slide-show") ? s("xl-slide-show") : s("slide-show"),
                    centerMode: !!s("xl-center-mode"),
                    centerPadding: "0"
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!s("ml-arrows"),
                    dots: !!s("ml-dots"),
                    slidesToShow: s("ml-slide-show") ? s("ml-slide-show") : s("slide-show"),
                    centerMode: !!s("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!s("lg-arrows"),
                    dots: !!s("lg-dots"),
                    slidesToShow: s("lg-slide-show") ? s("lg-slide-show") : s("slide-show"),
                    centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!s("md-arrows"),
                    dots: !!s("md-dots"),
                    slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                    centerMode: !!s("md-center-mode") && s("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!s("sm-arrows"),
                    dots: !!s("sm-dots"),
                    slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                    centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!s("xs-arrows"),
                    dots: !!s("xs-dots"),
                    slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                    centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }));
    var i = e(".slick-3d-active");
    i.on("init", (function(t, s, a) {
        var n = e(s.$slides[s.currentSlide]),
            i = n.next(),
            o = n.next().next(),
            r = n.prev(),
            l = n.prev().prev();
        r.addClass("slick-3d-prev"), i.addClass("slick-3d-next"), l.addClass("slick-3d-prev2"), o.addClass("slick-3d-next2"), n.removeClass("slick-3d-next").removeClass("slick-3d-prev").removeClass("slick-3d-next2").removeClass("slick-3d-prev2"), s.$prev = r, s.$next = i
    })).on("beforeChange", (function(t, s, a, n) {
        var i = e(s.$slides[n]);
        s.$prev.removeClass("slick-3d-prev"), s.$next.removeClass("slick-3d-next"), s.$prev.prev().removeClass("slick-3d-prev2"), s.$next.next().removeClass("slick-3d-next2");
        var o = i.next(),
            r = i.prev();
        r.addClass("slick-3d-prev"), o.addClass("slick-3d-next"), r.prev().addClass("slick-3d-prev2"), o.next().addClass("slick-3d-next2"), s.$prev = r, s.$next = o, i.removeClass("slick-next").removeClass("slick-3d-prev").removeClass("slick-next2").removeClass("slick-3d-prev2")
    })), i.slick({
        speed: 1e3,
        arrows: !1,
        dots: !1,
        focusOnSelect: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        infinite: !0,
        centerMode: !0,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
        swipe: !0,
        customPaging: function(e, t) {
            return ""
        },
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !1
            }
        }]
    });
    var o = e(".heroSlider"),
        r = e(".progress"),
        l = e(".pagingInfo1"),
        c = e(".slider__label"),
        d = e(".pagingInfo2");
    o.on("init reInit afterChange", (function(e, t, s, a) {
        if (t.$dots) {
            var n = (s || 0) + 0;
            l.text(n + 1), d.text(t.slideCount)
        }
    })), o.on("beforeChange", (function(e, t, s, a) {
        var n = a / (t.slideCount - 1) * 100;
        r.css("background-size", n + "% 100%").attr("aria-valuenow", n), c.text(n + "% completed")
    })), e(".heroSlide").slick({
        arrows: !1,
        autoplay: !0,
        dots: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button class='arrowLeft'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow: "<button class='arrowRight'><i class='fa-solid fa-arrow-right ms-2'></i></button>"
    }), e("[data-ani-duration]").each((function() {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("th-animated")
    })), e(".th-carousel").on("afterChange", (function(t, s, a, n) {
        e(s.$slides).find("[data-ani]").removeClass("th-animated"), e(s.$slides[a]).find("[data-ani]").addClass("th-animated")
    })), e(".tilt-active").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.05,.98,.72,.99)",
        speed: 1200,
        glare: !0,
        maxGlare: .2
    });
    var p, u, h, f = ".ajax-contact",
        v = '[name="email"]',
        g = e(".form-messages");

    function m() {
        var t = e(f).serialize();
        (function() {
            var t, s = !0;

            function a(a) {
                a = a.split(",");
                for (var n = 0; n < a.length; n++) t = f + " " + a[n], e(t).val() ? (e(t).removeClass("is-invalid"), s = !0) : (e(t).addClass("is-invalid"), s = !1)
            }
            a('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(v).val() && e(v).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(v).removeClass("is-invalid"), s = !0) : (e(v).addClass("is-invalid"), s = !1);
            return s
        })() && jQuery.ajax({
            url: e(f).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            g.removeClass("error"), g.addClass("success"), g.text(t), e(f + ' input:not([type="submit"]),' + f + " textarea").val("")
        })).fail((function(e) {
            g.removeClass("success"), g.addClass("error"), "" !== e.responseText ? g.html(e.responseText) : g.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function w(e) {
        return parseInt(e, 10)
    }
    e(f).on("submit", (function(e) {
            e.preventDefault(), m()
        })), p = ".popup-search-box", u = ".searchClose", h = "show", e(".searchBoxToggler").on("click", (function(t) {
            t.preventDefault(), e(p).addClass(h)
        })), e(p).on("click", (function(t) {
            t.stopPropagation(), e(p).removeClass(h)
        })), e(p).find("form").on("click", (function(t) {
            t.stopPropagation(), e(p).addClass(h)
        })), e(u).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(p).removeClass(h)
        })),
        function(t, s, a, n) {
            e(s).on("click", (function(s) {
                s.preventDefault(), e(t).addClass(n)
            })), e(t).on("click", (function(s) {
                s.stopPropagation(), e(t).removeClass(n)
            })), e(t + " > div").on("click", (function(s) {
                s.stopPropagation(), e(t).addClass(n)
            })), e(a).on("click", (function(s) {
                s.preventDefault(), s.stopPropagation(), e(t).removeClass(n)
            }))
        }(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe"
        }), e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }), e(".popup-content").on("click", (function() {
            e(".slick-slider").slick("refresh")
        })), e.fn.sectionPosition = function(t, s) {
            e(this).each((function() {
                var a, n, i, o, r, l = e(this);
                a = Math.floor(l.height() / 2), n = l.attr(t), i = l.attr(s), o = w(e(i).css("padding-top")), r = w(e(i).css("padding-bottom")), "top-half" === n ? (e(i).css("padding-bottom", r + a + "px"), l.css("margin-top", "-" + a + "px")) : "bottom-half" === n && (e(i).css("padding-top", o + a + "px"), l.css("margin-bottom", "-" + a + "px"))
            }))
        };
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var s = e(this).attr("data-filter");
                t.isotope({
                    filter: s
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".masonary-active").imagesLoaded((function() {
        e(".masonary-active").length > 0 && e(".masonary-active").isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        })
    })), e(".odometer").length && (e(".odometer").appear(), e(document.body).on("appear", ".odometer", (function(t) {
        e(".odometer").each((function() {
            var t = e(this).attr("data-count");
            e(this).html(t)
        })), window.odometerOptions = {
            format: "d"
        }
    })));
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    });

    function b() {
        e(".progressbar").each((function() {
            var t = e(this).offset().top,
                s = e(window).scrollTop(),
                a = e(this).find(".circle").attr("data-percent"),
                n = (parseInt(a, 10), parseInt(100, 10), e(this).data("animate"));
            t < s + e(window).height() - 30 && !n && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: a / 100,
                size: 135,
                thickness: 7,
                emptyFill: "#434653",
                fill: {
                    color: "#E81C2E"
                }
            }).on("circle-animation-progress", (function(t, s, a) {
                e(this).find(".circle-num").text((100 * a).toFixed(0) + "%")
            })).stop())
        }))
    }(new WOW).init(), e.fn.indicator = function() {
        var t = e(this),
            s = t.find("a"),
            a = t.find("button");
        t.append('<span class="indicator"></span>');
        var n = t.find(".indicator");
        if (s.length) var i = s;
        else if (a.length) i = a;

        function o() {
            var e = t.find(".active"),
                s = e.css("height"),
                a = e.css("width"),
                i = e.position().top + "px",
                o = e.position().left + "px";
            n.css({
                top: i,
                left: o,
                width: a,
                height: s
            })
        }
        i.on("click", (function(t) {
            t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
        })), o()
    }, e(".tab-menu1").length && e(".tab-menu1").indicator(), e(".tab-menu2").length && e(".tab-menu2").indicator(), e.fn.asTab = function(t) {
        var s = e.extend({
            sliderTab: !1,
            tabButton: "button"
        }, t);
        e(this).each((function() {
            var t = e(this),
                a = t.find(s.tabButton);
            t.append('<span class="indicator"></span>');
            var n = t.find(".indicator");
            if (a.on("click", (function(t) {
                    t.preventDefault();
                    var a = e(this);
                    a.addClass("active").siblings().removeClass("active"), s.sliderTab ? e(i).slick("slickGoTo", a.data("slide-go-to")) : r()
                })), s.sliderTab) {
                var i = t.data("asnavfor"),
                    o = 0;
                a.each((function() {
                    var a = e(this);
                    a.attr("data-slide-go-to", o), o++, a.hasClass("active") && e(i).slick("slickGoTo", a.data("slide-go-to")), e(i).on("beforeChange", (function(e, a, n, i) {
                        t.find(s.tabButton + '[data-slide-go-to="' + i + '"]').addClass("active").siblings().removeClass("active"), r()
                    }))
                }))
            }

            function r() {
                var i = t.find(s.tabButton + ".active"),
                    o = i.css("height"),
                    r = i.css("width"),
                    l = i.position().top + "px",
                    c = i.position().left + "px";
                n.get(0).style.setProperty("--height-set", o), n.get(0).style.setProperty("--width-set", r), n.get(0).style.setProperty("--pos-y", l), n.get(0).style.setProperty("--pos-x", c), e(a).first().position().left == i.position().left ? n.addClass("start").removeClass("center").removeClass("end") : e(a).last().position().left == i.position().left ? n.addClass("end").removeClass("center").removeClass("start") : n.addClass("center").removeClass("start").removeClass("end")
            }
            r()
        }))
    }, e(".hero-indicator").length && e(".hero-indicator").asTab({
        sliderTab: !0,
        tabButton: ".indicatior-btn"
    }), e(".hero-indicator3").length && e(".hero-indicator3").asTab({
        sliderTab: !0,
        tabButton: ".indicatior-btn"
    }), e(".testi-card-2-tab").length && e(".testi-card-2-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".service-tab-menu").length && e(".service-tab-menu").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), b(), e(window).scroll(b), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                s = t.data("top"),
                a = t.data("right"),
                n = t.data("bottom"),
                i = t.data("left");
            t.css({
                top: s,
                right: a,
                bottom: n,
                left: i
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e.fn.countdown = function() {
        e(this).each((function() {
            var t = e(this),
                s = new Date(t.data("offer-date")).getTime();

            function a(e) {
                return t.find(e)
            }
            var n = setInterval((function() {
                var e = (new Date).getTime(),
                    i = s - e,
                    o = Math.floor(i / 864e5),
                    r = Math.floor(i % 864e5 / 36e5),
                    l = Math.floor(i % 36e5 / 6e4),
                    c = Math.floor(i % 6e4 / 1e3);
                o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), i < 0 ? (clearInterval(n), t.addClass("expired"), t.find(".message").css("display", "block")) : (a(".day").html(o), a(".hour").html(r), a(".minute").html(l), a(".seconds").html(c))
            }), 1e3)
        }))
    }, e(".counter-list").length && e(".counter-list").countdown(), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(t, s) {
            e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e((function() {
        e(".progress-bar").each((function() {
            e(this).find(".progress-content").animate({
                width: e(this).attr("data-percentage")
            }, 2e3), e(this).find(".progress-number-mark").animate({
                left: e(this).attr("data-percentage")
            }, {
                duration: 2e3,
                step: function(t, s) {
                    var a = Math.round(t);
                    e(this).find(".percent").html(a + "%")
                }
            })
        }))
    })), e(window).on("scroll", (function() {
        e(".onepage").length > 0 && (e(window).scrollTop() > 0 ? e(".th-header .sticky-active").addClass("sticky") : e(".th-header .sticky-active").removeClass("sticky"))
    })), e.fn.indicator = function() {
        var t = e(this),
            s = t.find("a"),
            a = t.find("button");
        t.append('<span class="indicator"></span>');
        var n = t.find(".indicator");
        if (s.length) var i = s;
        else if (a.length) i = a;

        function o() {
            var s = t.find(".active"),
                a = s.css("height"),
                i = s.css("width"),
                o = s.position().top + "px",
                r = s.position().left + "px";
            e(window).on("resize", (function() {
                o = s.position().top + "px", r = s.position().left + "px"
            })), n.get(0).style.setProperty("--height-set", a), n.get(0).style.setProperty("--width-set", i), n.get(0).style.setProperty("--pos-y", o), n.get(0).style.setProperty("--pos-x", r)
        }
        i.on("click", (function(t) {
            t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
        })), o()
    }, e(".indicator-active").length && e(".indicator-active").indicator(), e((function() {
        e(".project-sec").slice(0, 4).show(), e("#loadMore").on("click", (function(t) {
            t.preventDefault(), e(".loadcontent:hidden").slice(0, 3).slideDown(), 0 == e(".loadcontent:hidden").length && e("#loadMore").text("No Content").addClass("noContent")
        }))
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            isNaN(a) || s.val(a + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            !isNaN(a) && a > 1 && s.val(a - 1)
        }))
    })), window.addEventListener("contextmenu", (function(e) {
       
    }), !1), document.onkeydown = function(e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);