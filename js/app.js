/**
 * Occurs when document is ready
 */
$(document).ready(function () {
  includeHTML();
})

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
      }
}
/**
 * Rounds a number to a certain number of places
 * @param {number} number
 * @param {number} places
 */
function Round(number, places) {
  console.log({ Round: { number: number, places: places } });
  final = Math.round(number * Math.pow(10, places)) / Math.pow(10, places);
  console.log({ return: final });
  return final;
}