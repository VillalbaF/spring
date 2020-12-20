

function test(){
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});


function highlight_row() {
  var table = document.getElementById('display-table');
  var cells = table.getElementsByTagName('td');

  for (var i = 0; i < cells.length; i++) {
      // Take each cell
      var cell = cells[i];
      // do something on onclick event for cell
      cell.onclick = function () {
          // Get the row id where the cell exists
          var rowId = this.parentNode.rowIndex;

          var rowsNotSelected = table.getElementsByTagName('tr');
          for (var row = 0; row < rowsNotSelected.length; row++) {
              rowsNotSelected[row].style.backgroundColor = "";
              rowsNotSelected[row].classList.remove('selected');
          }
          var rowSelected = table.getElementsByTagName('tr')[rowId];
          rowSelected.className += "selected";

          msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
          msg += '\nThe cell value is: ' + rowSelected.cells[1].innerHTML;
          alert(msg);
      }
  }

} //end of function

window.onload = highlight_row;