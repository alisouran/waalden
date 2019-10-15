$(document).ready(function() {
  $(document).ajaxStart(function() {
    $("#wait").fadeIn(100);
  });
  $(document).ajaxComplete(function() {
    $("#wait").fadeOut(500);
  });

  checkPosition();
  function checkPosition() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
      $("#homepage-main").load("../../pages/layout/homepage-mobile.html");

      $("#mobile-home").click(function() {
        $("#homepage-main").load("../../pages/layout/homepage-mobile.html");
      });
      $("#mobile-dashboard").click(function() {
        $("#homepage-main").load("../../pages/layout/dashboard.html");
      });
      $("#mobile-waalden").click(function() {
        $("#homepage-main").load("../../pages/layout/honarema-mobile.html");
      });
      $("#servicesMobileBtn").click(function() {
        $("#homepage-main").load("../../pages/layout/servicesMobile.html");
      });
    } else {
      $("#homepage-main").load("../../pages/layout/homepage-desktop.html");
    }
  }

  $("#honaremaContent").load("../../pages/layout/services.html");

  $("#servicesBtn").click(function() {
    $("#honaremaContent").load("../../pages/layout/services.html");
  });
  $("#projectBtn").click(function() {
    $("#honaremaContent").load("../../pages/layout/project.html");
  });
  $("#companyBtn").click(function() {
    $("#honaremaContent").load("../../pages/layout/company.html");
  });
  let previous = -1;
  $(".icon[data-index]").click(function() {
    $(this).addClass("initialised");
    let index = $(this).attr("data-index");
    let navtab = $(this)
      .closest("nav.tab")
      .addClass("moving")
      .attr("data-selected", index);
    if (previous == -1)
      navtab.find('.icon[data-index="2"]').addClass("initialised");
    if ((previous == 1 && index == 3) || (previous == 3 && index == 1)) {
      navtab.find('.icon[data-index="2"]').removeClass("initialised");
      setTimeout(function() {
        navtab.find('.icon[data-index="2"]').addClass("initialised");
      });
    }
    previous = index;
    setTimeout(function() {
      navtab.removeClass("moving").removeClass("hidemiddle");
    }, 750);
  });
});
