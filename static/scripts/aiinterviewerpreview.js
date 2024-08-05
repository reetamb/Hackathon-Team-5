// script.js 

// Taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

let isHidden = true;

// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
    
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
            <div class="resumeBox">
                <div class="heading">
                    <h1>${inputField["name"].value}</h1>
                    <h4>${inputField["title"].value}</h4>
                </div>
                <div class="info">
                    <div class="left">

                    <div class="box">
                            <h2 class="sectionTitle" >Work Experience</h2>
                            <h3 class="subHeading">${inputField["workExpTitle1"].value}</h3>
                            <p>${inputField["work_experience1"].value}</p>
                            <br>
                            <h3 class="subHeading">${inputField["workExpTitle2"].value}</h3>
                            <p>${inputField["work_experience2"].value}</p>
                            <br>
                            <h3 class="subHeading">${inputField["workExpTitle3"].value}</h3>
                            <p>${inputField["work_experience3"].value}</p>
                        </div>


                        <div class="box">
                            <h2 class="sectionTitle" >Skills</h2>
                            <p>${inputField["Skills"].value}</p>
                        </div>

                        <div class="box">
                            <h2 class="sectionTitle" >Academic Details</h2>
                            <p>${inputField["diploma"].value}</p>
                            <p>${inputField["institute"].value}</p>
                            <p>${inputField["academics_details"].value}</p>
                        </div>
                        <div class="box">
                            <h2 class="sectionTitle" >Contact</h2>
                            <p>${inputField["Email"].value}</p>
                            <p>${inputField["Phone"].value}</p>
                        </div>
                    </div>
                </div>
                <div class="footer"> </div>
                </div>
            </div>
            <button onclick="window.print();" class="noPrint" >Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

