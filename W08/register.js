document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");
  
    addButton.addEventListener("click", () => {
      participantCount++;
      addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const total = totalFees();
      const adultName = document.getElementById("adult_name").value;
      
      form.style.display = "none";
      summary.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        total: total,
      });
      summary.style.display = "block";
    });
  
    function participantTemplate(count) {
      return `
        <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
          </div>
          <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
          </div>
        </section>
      `;
    }
  
    function totalFees() {
      let feeElements = document.querySelectorAll("[id^=fee]");
      feeElements = [...feeElements];
      return feeElements.reduce((sum, elem) => sum + (parseFloat(elem.value) || 0), 0);
    }
  
    function successTemplate(info) {
      return `
        <h2>Thank you, ${info.name}, for registering!</h2>
        <p>You have registered ${info.participants} participant(s) and owe $${info.total} in fees.</p>
      `;
    }
  });