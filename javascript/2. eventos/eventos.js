/* Form 1 */
document.querySelector('#onclick').addEventListener('click', function (e) {
  alert('Click')
});

/* Form2 */
document.querySelector('#ondblclick').ondblclick = function (e) {
  alert('Doble Click');
};

/* Add Event Document */
function keyDown(e) {
  console.log(e.key)
}
window.document.addEventListener('keydown', keyDown);


setTimeout(function () {
  /* Remove Event Document */
  window.document.removeEventListener('keydown', keyDown);
  console.log('Event Key Remove');
}, 5000);