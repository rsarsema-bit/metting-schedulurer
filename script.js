```javascript
let meetings = JSON.parse(localStorage.getItem("meetings")) || [];

function saveMeetings() {
    localStorage.setItem("meetings", JSON.stringify(meetings));
}

function addMeeting() {

    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const participants = document.getElementById("participants").value.trim();

    if (title === "") {
        alert("Please enter a meeting title.");
        return;
    }

    if (date === "") {
        alert("Please select a date.");
        return;
    }

    if (time === "") {
        alert("Please select a time.");
        return;
    }

    const meeting = {
        id: Date.now(),
        title,
        date,
        time,
        participants,
        status: "Scheduled"
    };

    meetings.push(meeting);

    saveMeetings();

    if (document.getElementById("meetingsContainer")) {
        displayMeetings();
    }

    clearForm();

    alert("✅ Meeting scheduled successfully!");
}

function deleteMeeting(id) {

    meetings = meetings.filter(
        meeting => meeting.id !== id
    );

    saveMeetings();

    if (document.getElementById("meetingsContainer")) {
        displayMeetings();
    }
}

function displayMeetings() {

    const container =
        document.getElementById("meetingsContainer");

    if (!container) return;

    if (meetings.length === 0) {

        container.innerHTML = 
            <div class="meeting-card">
                <h3>📅 No Meetings Yet</h3>
                <p>Create your first meeting to get started.</p>
            </div>
        `;

        return;
    

    container.innerHTML = "";

    meetings.forEach((meeting, index) => {

        container.innerHTML += `
            <div class="meeting-card" style="animation:fadeIn .5s ease ${index * 0.1}s both;">

                <div style="display:flex;justify-content:space-between;align-items:center;">

                    <h3>📌 ${meeting.title}</h3>

                    <button
                        onclick="deleteMeeting(${meeting.id})"
                        style="
                            width:auto;
                            padding:8px 14px;
                            background:#ef4444;
                            border:none;
                            border-radius:8px;
                            color:white;
                            cursor:pointer;">
                        Delete
                    </button>

                </div>

                <p><strong>📅 Date:</strong> ${meeting.date}</p>

                <p><strong>🕒 Time:</strong> ${meeting.time}</p>

                <p><strong>👥 Participants:</strong> ${meeting.participants || "Not specified"}</p>

                <div style="margin-top:15px;">
                    <span class="tag">
                        ${meeting.status}
                    </span>
                </div>

            </div>
        `;
    });


function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("participants").value = "";
}

displayMeetings();

