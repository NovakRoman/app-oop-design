function ExpertsService() {
}

ExpertsService.prototype.getAllExperts = async function () {
  const response = await fetch('https://dummyjson.com/users');
  if (response.ok) {
    const experts = await response.json();
    return experts.users;
  } else {
  alert("Ошибка HTTP: " + response.status);
}
};

ExpertsService.prototype.renderExpertsList = function (experts) {
  let expertsData = document.getElementById("expertsData");
  const mappedExperts = experts.slice(0, 6).map((expert, index) => {
    return `<div class="expertsProfile">
            <figure class="expertsProfileData">
            <img src="https://api.lorem.space/image/face?w=320&h=320&r=${expert.id}" class="expertsProfileImage" alt="expertsProfileImage">
            <figcaption class="expertsProfileDescription">${expert.firstName} ${expert.lastName}<span class="descriptionJob">${expert.company.name}</span></figcaption>
            </figure>
            </div>`;
  }); 
  expertsData.innerHTML = mappedExperts.join('')
};



