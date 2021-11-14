// Default Radio Selection
document.querySelector("#CSERadio").checked = true;
CSEChecker();

// For CSE
document.querySelector("#CSERadio").onclick = CSEChecker;

// For ECE
document.querySelector("#ECERadio").onclick = ECEChecker;


// Radio Check and Add HTML Function for CSE
function CSEChecker() {
    if (document.querySelector("#CSERadio").checked) {
        DataRemover();
        classRemover("clicked", ".data");
        classRemover("clicked", ".paper");

        var C1 = document.querySelectorAll(".C1")
        for (var i = 0; i < C1.length; i++) {
            C1[i].innerHTML = "Paper - 1 C<br>(MS)";
        }

        var C2 = document.querySelectorAll(".C2")
        for (var i = 0; i < C2.length; i++) {
            C2[i].innerHTML = "Paper - 2 C<br>(MT)";
        }

        var C3 = document.querySelectorAll(".C3")
        for (var i = 0; i < C3.length; i++) {
            C3[i].innerHTML = "Paper - 3 C<br>(PJ)";
        }

        var EC4 = document.querySelectorAll(".EC4")
        for (var i = 0; i < EC4.length; i++) {
            EC4[i].innerHTML = "Paper - 4 E&C<br>(NKM)";

        }

        var EC5 = document.querySelectorAll(".EC5")
        for (var i = 0; i < EC5.length; i++) {
            EC5[i].innerHTML = "Paper - 5 E&C<br>(RSR)";

        }

        var EC6 = document.querySelectorAll(".EC6")
        for (var i = 0; i < EC6.length; i++) {
            EC6[i].innerHTML = "Paper - 6 E&C<br>(ACP)";
        }

        var C7 = document.querySelectorAll(".C7")
        for (var i = 0; i < C7.length; i++) {
            C7[i].innerHTML = "Lab - 307";
        }

        var C8 = document.querySelectorAll(".C8")
        for (var i = 0; i < C8.length; i++) {
            C8[i].innerHTML = "Lab - 308";
        }
    }
}

// Radio Check and Add HTML Function for ECE
function ECEChecker() {
    if (document.querySelector("#ECERadio").checked) {
        if (document.querySelector("#ECERadio").checked) {
            DataRemover();
            classRemover("clicked", ".data");
            classRemover("clicked", ".paper");

            var E1 = document.querySelectorAll(".E1")
            for (var i = 0; i < E1.length; i++) {
                E1[i].innerHTML = "Paper - 1 E<br>(SHW)";
            }

            var E2 = document.querySelectorAll(".E2")
            for (var i = 0; i < E2.length; i++) {
                E2[i].innerHTML = "Paper - 2 E<br>(RSY)";
            }

            var E3 = document.querySelectorAll(".E3")
            for (var i = 0; i < E3.length; i++) {
                E3[i].innerHTML = "Paper - 3 E<br>(SNH)";
            }

            var EC4 = document.querySelectorAll(".EC4")
            for (var i = 0; i < EC4.length; i++) {
                EC4[i].innerHTML = "Paper - 4 E&C<br>(NKM)";

            }

            var EC5 = document.querySelectorAll(".EC5")
            for (var i = 0; i < EC5.length; i++) {
                EC5[i].innerHTML = "Paper - 5 E&C<br>(RSR)";

            }

            var EC6 = document.querySelectorAll(".EC6")
            for (var i = 0; i < EC6.length; i++) {
                EC6[i].innerHTML = "Paper - 6 E&C<br>(ACP)";
            }

            var E7 = document.querySelectorAll(".E7")
            for (var i = 0; i < E7.length; i++) {
                E7[i].innerHTML = "Lab - 307";
            }

            var E8 = document.querySelectorAll(".E8")
            for (var i = 0; i < E8.length; i++) {
                E8[i].innerHTML = "Lab - 308";
            }
        }
    }
}

//InnerHTML Remover
function DataRemover() {
    var data = document.querySelectorAll(".data");
    for (var i = 0; i < data.length; i++) {
        data[i].innerHTML = "❌";
    }
}

//Class Remover
function classRemover(className, selector) {
    var data = document.querySelectorAll(selector);
    for (var i = 0; i < data.length; i++) {
        data[i].classList.remove(className);
    }
}

//Add and Remove Clicked Class
var data = document.querySelectorAll(".data");
for (var i = 0; i < data.length; i++) {
    data[i].addEventListener("click", function () {
        if (this.classList[2] !== "clicked" && this.classList[3] !== "clicked") {
            classRemover("clicked", ".data");
            classRemover("clicked", ".paper");
        }
        var classNumber = 0;
        if (this.classList[2] == "data" && document.querySelector("#CSERadio").checked == true) {
            classNumber = 1;
        }
        var clicked = document.querySelectorAll("." + this.classList[classNumber]);
        for (var j = 0; j < clicked.length; j++) {
            clicked[j].classList.toggle("clicked");
        }
        var clickedDetails = document.querySelectorAll(".P" + this.classList[classNumber]);
        for (var j = 0; j < clickedDetails.length; j++) {
            clickedDetails[j].classList.toggle("clicked");
        }
        if (this.innerHTML == "❌") {
            classRemover("clicked", ".data");
            classRemover("clicked", ".paper");
        }
    })
}