document.addEventListener("DOMContentLoaded", function () {
    var infoBoxes = [];
    var unlockCode = "default_code"; // Initial unlock code

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

        var labelUsername = document.createElement("label");
        labelUsername.for = "username";
        labelUsername.textContent = "Username:";

        var inputUsername = document.createElement("input");
        inputUsername.type = "text";
        inputUsername.id = "username";
        inputUsername.placeholder = "Enter username";

        var labelPassword = document.createElement("label");
        labelPassword.for = "password";
        labelPassword.textContent = "Password:";

        var inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.id = "password";
        inputPassword.placeholder = "Enter password";

        var unlockCodeInput = document.createElement("input");
        unlockCodeInput.type = "text";
        unlockCodeInput.placeholder = "Enter unlock code";

        var setCodeButton = createButton("Set Code", function () {
            setUnlockCode(unlockCodeInput, inputPassword);
        });

        var unlockButton = createButton("Unlock", function () {
            unlockPassword(inputPassword, unlockCodeInput.value);
        });

        var lockButton = createButton("Lock", function () {
            lockPassword(inputPassword);
        });

        var deleteButton = createButton("Delete", function () {
            deleteInfoBox(infoBox);
        });

        var saveButton = createButton("Save", function () {
            saveInformation();
        });

        infoBox.appendChild(labelUsername);
        infoBox.appendChild(inputUsername);
        infoBox.appendChild(document.createElement("br"));

        infoBox.appendChild(labelPassword);
        infoBox.appendChild(inputPassword);
        infoBox.appendChild(document.createElement("br"));

        infoBox.appendChild(unlockCodeInput);
        infoBox.appendChild(setCodeButton);
        infoBox.appendChild(unlockButton);
        infoBox.appendChild(lockButton);
        infoBox.appendChild(deleteButton);
        infoBox.appendChild(document.createElement("br"));

        infoBox.appendChild(saveButton);

        infoBoxContainer.appendChild(infoBox);

        infoBoxes.push(infoBox);
    }

    function createButton(text, onClickHandler) {
        var button = document.createElement("button");
        button.textContent = text;
        button.onclick = onClickHandler;
        return button;
    }

    function setUnlockCode(unlockCodeInput, enteredPassword) {
        if (enteredPassword.value !== "") {
            unlockCode = unlockCodeInput.value;
            alert("Unlock code updated successfully!");
        } else {
            alert("Please fill out the unlock box before saving the code.");
        }
    }

    function deleteInfoBox(infoBox) {
        var infoBoxContainer = document.getElementById("infoBoxContainer");
        infoBoxContainer.removeChild(infoBox);

        // Remove the infoBox from the infoBoxes array
        infoBoxes = infoBoxes.filter(function (box) {
            return box !== infoBox;
        });
    }

    function saveInformation() {
        alert("Information saved!");
        // Add further logic to handle saving the information as needed
    }

    function unlockPassword(passwordInput, enteredCode) {
        if (enteredCode === unlockCode) {
            passwordInput.type = "text";
        } else {
            alert("Incorrect unlock code");
        }
    }

    function lockPassword(passwordInput) {
        passwordInput.type = "password";
    }

    window.toggleInfoBox = toggleInfoBox; // Expose the function to the global scope
});
