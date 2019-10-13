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
