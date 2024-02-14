document.addEventListener("DOMContentLoaded", function () {
    var infoBoxes = [];

    function toggleInfoBox() {
        if (infoBoxes.length < 10) {
            createInfoBox();
        } else {
            alert("You've reached the maximum limit of 10 boxes.");
        }
    }

    function createInfoBox() {
        var infoBoxContainer = document.getElementById("infoBoxContainer");

        var infoBox = document.createElement("div");
        infoBox.className = "infoBox";

        var label = document.createElement("label");
        label.for = "information";
        label.textContent = "Enter information:";

        var textarea = document.createElement("textarea");
        textarea.id = "information";
        textarea.rows = "4";
        textarea.cols = "30";

        var saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.onclick = function () {
            saveInformation(textarea.value, infoBox);
        };

        infoBox.appendChild(label);
        infoBox.appendChild(textarea);
        infoBox.appendChild(document.createElement("br"));
        infoBox.appendChild(saveButton);

        infoBoxContainer.appendChild(infoBox);

        infoBoxes.push(infoBox);
    }

    function saveInformation(information, infoBox) {
        alert("Information saved: " + information);
        // Add further logic to handle saving the information as needed

        // Example: You can remove the box from the array and hide it.
        infoBoxes = infoBoxes.filter(box => box !== infoBox);
        infoBox.style.display = "none";
    }

    window.toggleInfoBox = toggleInfoBox; // Expose the function to the global scope
});
