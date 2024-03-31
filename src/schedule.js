function ScheduleService() {
}

ScheduleService.prototype.getAllSchedule = async function () {
    console.log("+");
  const response = await fetch('https://dummyjson.com/users');
  if (response.ok) {
    const schedule = await response.json();
    console.log(schedule);
    return schedule.users;
  } else {
  alert("Ошибка HTTP: " + response.status);
}
};

ScheduleService.prototype.renderScheduleList = function (schedule) {
  let expertProgramDate = document.getElementById("expertProgramDate");
  const mappedExperts = schedule.slice(0, 3).map((expert, index) => {
    return `<div class="expertsProfile">
            <figure class="expertsProfileData">
            <img src="https://api.lorem.space/image/face?w=320&h=320&r=${expert.id}" class="expertsProfileImage" alt="expertsProfileImage">
            <figcaption class="expertsProfileDescription">${expert.name}<span class="descriptionJob">${expert.company.name}</span></figcaption>
            </figure>
            </div>`;
  }); 
  expertProgramDate.innerHTML = mappedExperts.join('')
};



