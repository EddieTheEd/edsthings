// Function to fetch JSON data
function fetchJSONFile(callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', 'things.json');
  httpRequest.send(); 
}

// Function to format and append projects to the div
function appendProjects(data) {
  var projectsDiv = document.getElementById('projects');
  data.forEach(function(project) {
    var projectLink = document.createElement('a');
    projectLink.id = 'projectlink';
    projectLink.href = project.link;
    projectLink.className = 'projectdiv';

    var projectContent = document.createElement('div');

    var projectName = document.createElement('h2');
    projectName.textContent = project.name;

    var projectDescription = document.createElement('p');
    var em = document.createElement('em');
    em.textContent = project.description;
    projectDescription.appendChild(em);

    var projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.style.height = '400px';
    projectImage.style.width = '400px'; // Set the style instead of the attributes

    projectContent.appendChild(projectName);
    projectContent.appendChild(projectDescription);
    projectContent.appendChild(projectImage);

    projectLink.appendChild(projectContent);

    projectsDiv.appendChild(projectLink);
  });
}

// Call the fetchJSONFile function and append projects when JSON data is fetched
fetchJSONFile(appendProjects);

document.addEventListener("DOMContentLoaded", function() {
  var img = document.createElement("img");
  img.src = "./assets/images/compsciismypasion.gif";
  img.alt = "comp sci is my passion";
  document.getElementById("intro").appendChild(img);
});
