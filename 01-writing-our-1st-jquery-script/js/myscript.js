//will assign css class .selection to the odd numbered table rows
 //$(document).ready(function(){
    //$("tr:odd").addClass("selection");
  //});
 
 
 $(document).ready(function(){
  
  $("tr:odd").addClass("selection");
  $("tr:even").addClass("even");
  
 });
 
 //th is table header
 //tr is table row
 //td is the standard cell that holds data