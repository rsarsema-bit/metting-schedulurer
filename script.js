```javascript id="nm8d2r"
let meetings = JSON.parse(localStorage.getItem("meetings")) || [];

function saveMeetings(){
  localStorage.setItem("meetings", JSON.stringify(meetings));
}

function addMeeting(){

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const participants = document.getElementById("participants").value;

  if(!title || !date || !time){
    alert("Please fill all required fields");
    return;
  }

  const meeting = {
    title,
    description,
    date,
    time,
    participants
  };

  meetings.push(meeting);

  saveMeetings();

  displayMeetings();

  clearForm();
}

function displayMeetings(){

  const container = document.getElementById("meetingsContainer");

  if(!container) return;

  container.innerHTML = "";

  meetings.forEach((meeting)=>{

    container.innerHTML += 
      <div class="meeting-card">

        <h3>${meeting.title}</h3>

        <p>${meeting.description}</p>

        <p><strong>Date:</strong> ${meeting.date}</p>

        <p><strong>Time:</strong> ${meeting.time}</p>

        <p><strong>Participants:</strong> ${meeting.participants}</p>

        <span class="tag">Scheduled</span>

      </div>
    ;
  });
}

function clearForm(){

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("participants").value = "";
}

displayMeetings();
```




