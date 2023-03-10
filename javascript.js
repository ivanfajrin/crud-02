let feedbackHeader = document.getElementById("feedbackHeader");
let totalFeedbacks = document.getElementById("feedback");
let addFeedbackBtn = document.getElementById("add-feedback-button");
let feedbackList = document.getElementById("feedback-list")
let editBtn = document.getElementById("edit-button");
let deleteBtn = document.getElementById("delete-button");
let nameInput = document.getElementById("name");
let titleInput = document.getElementById("title");
let textInput = document.getElementById("text");
let addBtn = document.getElementById("add-button");
let cancelBtn = document.getElementById("cancel-button");
let modal = document.getElementById("add-feedback-modal")

let feedback = {
	
}

addFeedbackBtn.addEventListener("click", () => {
	modal.style.display= "block";

	feedbackHeader.style.display = "none"
	feedbacklist.style.display = "none";
})

cancelBtn.addEventListener("click", () => {
	 modal.style.display= "none";
	
	feedbackHeader.style.display ="flex"
	feedbacklist.style.display ="block";
	})

addBtn.addEventListener("click", () =>
{

	})
