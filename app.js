const btnLog = document.querySelector("#log-mood");

// const ModalClose = document.querySelector(".btn text");
// const Dialog = document.createElement("dialog");
// const submitForm = document.createElement(".btn block blue-600 neutral-o-text");
// const Labdeel = document.querySelectorAll("label");

function CreateModal() {
	const ImgMood = document.querySelector("#last-mood-img");
	const TextMood = document.querySelector("#last-mood-name");
	const divList = document.querySelector("#list-mood");	const divModal = document.createElement("div");
	const FormModal = document.createElement("form");
	const ImgForm = document.createElement("img");
	const ButtonForm = document.createElement("button");
	const hdeuxModal = document.createElement("h2");
	const htroisModal = document.createElement("h3");
	const labelModal = document.createElement("label");
	const labeldModal = document.createElement("label");
	const labeltModal = document.createElement("label");
	const labelqModal = document.createElement("label");
	const labelcModal = document.createElement("label");
	const inputModal = document.createElement("input");
	const idnputModal = document.createElement("input");
	const itnputModal = document.createElement("input");
	const iqnputModal = document.createElement("input");
	const icnputModal = document.createElement("input");
	const hcinqModal = document.createElement("h5");
	const hdcinqModal = document.createElement("h5");
	const htcinqModal = document.createElement("h5");
	const hqcinqModal = document.createElement("h5");
	const hccinqModal = document.createElement("h5");
	const BtnLog = document.createElement("button");
	const hquatrebtn = document.createElement("h4");

	document.body.appendChild(divModal);
	divModal.appendChild(FormModal);
	FormModal.appendChild(ButtonForm);
	ButtonForm.appendChild(ImgForm);
	FormModal.appendChild(hdeuxModal);
	FormModal.appendChild(htroisModal);
	FormModal.appendChild(labeldModal);
	labelModal.appendChild(idnputModal);
	labelModal.appendChild(hdcinqModal);
	FormModal.appendChild(labelModal);
	labeldModal.appendChild(inputModal);
	labeldModal.appendChild(hcinqModal);
	FormModal.appendChild(labeltModal);
	labeltModal.appendChild(itnputModal);
	labeltModal.appendChild(htcinqModal);
	FormModal.appendChild(labelqModal);
	labelqModal.appendChild(iqnputModal);
	labelqModal.appendChild(hqcinqModal);
	FormModal.appendChild(labelcModal);
	labelcModal.appendChild(icnputModal);
	labelcModal.appendChild(hccinqModal);
	FormModal.appendChild(BtnLog);
	BtnLog.appendChild(hquatrebtn);

	divModal.classList.add("modal");
	FormModal.classList.add("log-form");
	ButtonForm.type = "button";
	ButtonForm.style = "align-self: flex-end";
	ButtonForm.classList.add("btn", "text");
	ImgForm.src = "../assets/close.svg";
	ImgForm.alt = "close";
	hdeuxModal.classList.add("text-preset-2");
	htroisModal.classList.add("text-preset-3");
	inputModal.type = "radio";
	inputModal.name = "mood";
	inputModal.value = "very happy";
	idnputModal.type = "radio";
	idnputModal.name = "mood";
	idnputModal.value = "happy";
	itnputModal.type = "radio";
	itnputModal.name = "mood";
	itnputModal.value = "neutral";
	iqnputModal.type = "radio";
	iqnputModal.name = "mood";
	iqnputModal.value = "sad";
	icnputModal.type = "radio";
	icnputModal.name = "mood";
	icnputModal.value = "very sad";
	hcinqModal.classList.add("text-preset-5");
	hdcinqModal.classList.add("text-preset-5");
	htcinqModal.classList.add("text-preset-5");
	hqcinqModal.classList.add("text-preset-5");
	hccinqModal.classList.add("text-preset-5");
	BtnLog.classList.add("btn", "block", "blue-600", "neutral-o-text");
	hquatrebtn.classList.add("text-preset-4");

	hdeuxModal.textContent = "Log your mood";
	htroisModal.textContent = "How was your mood today ?";
	hcinqModal.textContent = "Very Happy";
	hdcinqModal.textContent = "Happy";
	htcinqModal.textContent = "Neutral";
	hqcinqModal.textContent = "Sad";
	hccinqModal.textContent = "Very Sad";
	hquatrebtn.textContent = "Log Mood";

	console.log(FormModal);

	FormModal.addEventListener("submit", (e) => {
		e.preventDefault();

		const data = new FormData(FormModal);

		const nameMood = data.get("mood");

		divModal.remove();

		const MoodList = document.createElement("p");
		divList.appendChild(MoodList);
		MoodList.classList.add("mood-card");
		MoodList.textContent = nameMood;

		if (nameMood == "very happy") {
			ImgMood.src = "assets/very-happy.svg";
			TextMood.textContent = nameMood;
			MoodList.classList.add("amber-300");
		}
		if (nameMood == "happy") {
			ImgMood.src = "assets/happy.svg";
			TextMood.textContent = nameMood;
			MoodList.classList.add("green-300");
		}
		if (nameMood == "neutral") {
			ImgMood.src = "assets/neutral.svg";
			TextMood.textContent = nameMood;
			MoodList.classList.add("blue-300");
		}
		if (nameMood == "sad") {
			ImgMood.src = "assets/sad.svg";
			TextMood.textContent = nameMood;
			MoodList.classList.add("indigo-300");
		}
		if (nameMood == "very sad") {
			ImgMood.src = "assets/very-sad.svg";
			TextMood.textContent = nameMood;
			MoodList.classList.add("red-300");
		}
	});

	ButtonForm.addEventListener("click", (e) => {
		divModal.remove();
	});
}

btnLog.addEventListener("click", (e) => {
	e.preventDefault();
	CreateModal();
});
