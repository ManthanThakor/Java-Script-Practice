

// CONFIRM BOX

// the confirm() method is used to display a dialog box with a message and two buttons: OK and Cancel. It's commonly used to get a confirmation from the user before proceeding with an action.


let result = confirm("Do you want to proceed?");
if (result) {
    console.log("User clicked OK.");
} else {
    console.log("User clicked Cancel.");
}

// ================================================================

const confirmBox = document.querySelector('.confirm-box');

confirmBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('confirm-box')) {
    // confirmBox.classList.add('confirm-box--hidden');
    confirm("ARE YOU SURE ? ");
  }
  
});
