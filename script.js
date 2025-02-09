function generateResume() {
    console.log("generateResume() function called.");
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let summary = document.getElementById("summary").value;
    let skills = document.getElementById("skills").value.split(",");
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;
  
    // Constructing the resume preview HTML
    let resumeHTML = `
      <div class="p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-gray-800">${name || "Your Name"}</h2>
        <p class="text-gray-600 mt-2"><strong>Email:</strong> ${email || "your.email@example.com"}</p>
        <p class="text-gray-600"><strong>Phone:</strong> ${phone || "(000) 000-0000"}</p>
        <p class="text-gray-600"><strong>Address:</strong> ${address || "Your Address"}</p>
        <hr class="my-4">
        <h3 class="text-xl font-semibold text-gray-800">Summary</h3>
        <p class="text-gray-600">${summary || "A short professional summary will go here."}</p>
        <h3 class="text-xl font-semibold text-gray-800 mt-3">Skills</h3>
        <ul class="list-disc list-inside text-gray-600">
          ${skills.filter(skill => skill.trim() !== "").map(skill => `<li>${skill.trim()}</li>`).join("") || "<li>No skills provided</li>"}
        </ul>
        <h3 class="text-xl font-semibold text-gray-800 mt-3">Education</h3>
        <p class="text-gray-600">${education || "Your education details"}</p>
        <h3 class="text-xl font-semibold text-gray-800 mt-3">Experience</h3>
        <p class="text-gray-600">${experience || "Your experience details"}</p>
      </div>
    `;
  
    document.getElementById("resume-output").innerHTML = resumeHTML;
    console.log("Resume preview updated.");
  }
  
  function downloadPDF() {
    console.log("downloadPDF() function called.");
    let resume = document.getElementById("resume-output");
    html2pdf().from(resume).save("Resume.pdf");
  }
  