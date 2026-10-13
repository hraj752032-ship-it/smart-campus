/* ==================================================
   SMART CAMPUS - FINAL JAVASCRIPT
   ================================================== */


/* ==================================================
   1. DEFAULT DATA
   ================================================== */

const defaultStudent = {
    name: "Harsh",
    id: "SC2026",
    course: "B.Tech Computer Science",
    semester: 5,
    cgpa: 8.4
};


const defaultAssignments = [
    {
        id: 1,
        subject: "Web Development",
        title: "Build responsive website",
        dueDate: "2026-10-12",
        completed: false
    },
    {
        id: 2,
        subject: "Database Systems",
        title: "SQL queries assignment",
        dueDate: "2026-10-15",
        completed: false
    },
    {
        id: 3,
        subject: "Software Engineering",
        title: "Project documentation",
        dueDate: "2026-10-18",
        completed: false
    },
    {
        id: 4,
        subject: "Computer Networks",
        title: "Network protocols report",
        dueDate: "2026-10-20",
        completed: false
    }
];


const attendanceData = [
    {
        subject: "Web Development",
        attended: 23,
        total: 25
    },
    {
        subject: "Database Systems",
        attended: 20,
        total: 24
    },
    {
        subject: "Software Engineering",
        attended: 18,
        total: 21
    },
    {
        subject: "Computer Networks",
        attended: 17,
        total: 20
    },
    {
        subject: "Operating Systems",
        attended: 16,
        total: 18
    }
];


const marksData = [
    {
        subject: "Web Development",
        marks: 88,
        grade: "A+"
    },
    {
        subject: "Database Systems",
        marks: 82,
        grade: "A"
    },
    {
        subject: "Software Engineering",
        marks: 86,
        grade: "A+"
    },
    {
        subject: "Computer Networks",
        marks: 79,
        grade: "A"
    },
    {
        subject: "Operating Systems",
        marks: 84,
        grade: "A"
    }
];


const notices = [
    {
        title: "Mid-semester examination schedule released",
        date: "08 Oct 2026",
        category: "Examination"
    },
    {
        title: "Library timings extended",
        date: "07 Oct 2026",
        category: "Library"
    },
    {
        title: "Hackathon registration is open",
        date: "05 Oct 2026",
        category: "Event"
    },
    {
        title: "Semester fee payment deadline announced",
        date: "03 Oct 2026",
        category: "Finance"
    },
    {
        title: "Campus placement orientation next week",
        date: "01 Oct 2026",
        category: "Placement"
    }
];


const events = [
    {
        title: "Annual Tech Fest",
        date: "15 Oct 2026",
        location: "Main Auditorium",
        icon: "💻"
    },
    {
        title: "Inter-College Hackathon",
        date: "20 Oct 2026",
        location: "Innovation Lab",
        icon: "🚀"
    },
    {
        title: "Cultural Night",
        date: "25 Oct 2026",
        location: "College Ground",
        icon: "🎵"
    },
    {
        title: "Career Development Workshop",
        date: "28 Oct 2026",
        location: "Seminar Hall",
        icon: "💼"
    },
    {
        title: "Sports Meet",
        date: "02 Nov 2026",
        location: "Sports Complex",
        icon: "🏆"
    },
    {
        title: "Alumni Interaction",
        date: "05 Nov 2026",
        location: "Conference Hall",
        icon: "🎓"
    }
];


const timetable = {
    Monday: [
        ["09:00 AM", "Web Development"],
        ["11:00 AM", "Database Systems"],
        ["02:00 PM", "Operating Systems"]
    ],

    Tuesday: [
        ["09:00 AM", "Computer Networks"],
        ["11:00 AM", "Software Engineering"],
        ["02:00 PM", "Web Development"]
    ],

    Wednesday: [
        ["09:00 AM", "Operating Systems"],
        ["11:00 AM", "Database Systems"],
        ["02:00 PM", "Lab Practice"]
    ],

    Thursday: [
        ["09:00 AM", "Web Development"],
        ["11:00 AM", "Database Systems"],
        ["02:00 PM", "Software Engineering"]
    ],

    Friday: [
        ["09:00 AM", "Computer Networks"],
        ["11:00 AM", "Operating Systems"],
        ["02:00 PM", "Project Work"]
    ]
};


/* ==================================================
   2. LOAD DATA FROM LOCALSTORAGE
   ================================================== */

let student =
    JSON.parse(localStorage.getItem("student")) ||
    defaultStudent;


let assignments =
    JSON.parse(localStorage.getItem("assignments")) ||
    defaultAssignments;


/* ==================================================
   3. LOGIN
   ================================================== */

const loginScreen =
    document.getElementById("loginScreen");

const app =
    document.getElementById("app");

const loginForm =
    document.getElementById("loginForm");


function showApplication() {

    loginScreen.classList.add("hidden");

    app.classList.remove("hidden");

    updateStudentUI();

    renderAll();

}


if (localStorage.getItem("loggedIn") === "true") {

    showApplication();

}


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("loginName").value.trim();

    const id =
        document.getElementById("loginId").value.trim();


    if (!name || !id) {

        alert("Please enter your name and student ID.");

        return;

    }


    student.name = name;

    student.id = id;


    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );


    localStorage.setItem(
        "loggedIn",
        "true"
    );


    showApplication();

});


/* ==================================================
   4. LOGOUT
   ================================================== */

document
    .getElementById("logoutButton")
    .addEventListener("click", function () {

        localStorage.setItem(
            "loggedIn",
            "false"
        );

        app.classList.add("hidden");

        loginScreen.classList.remove("hidden");

    });


/* ==================================================
   5. STUDENT UI
   ================================================== */

function updateStudentUI() {

    const elements = {

        dashboardName:
            document.getElementById("dashboardName"),

        dashboardCourse:
            document.getElementById("dashboardCourse"),

        topUserName:
            document.getElementById("topUserName"),

        profileName:
            document.getElementById("profileName"),

        profileNameInfo:
            document.getElementById("profileNameInfo"),

        profileAvatar:
            document.getElementById("profileAvatar"),

        profileId:
            document.getElementById("profileId"),

        dashboardCgpa:
            document.getElementById("dashboardCgpa")

    };


    if (elements.dashboardName) {
        elements.dashboardName.textContent =
            student.name;
    }


    if (elements.dashboardCourse) {
        elements.dashboardCourse.textContent =
            `${student.course} • Semester ${student.semester}`;
    }


    if (elements.topUserName) {
        elements.topUserName.textContent =
            student.name;
    }


    if (elements.profileName) {
        elements.profileName.textContent =
            student.name;
    }


    if (elements.profileNameInfo) {
        elements.profileNameInfo.textContent =
            student.name;
    }


    if (elements.profileAvatar) {
        elements.profileAvatar.textContent =
            student.name.charAt(0).toUpperCase();
    }


    if (elements.profileId) {
        elements.profileId.textContent =
            student.id;
    }


    if (elements.dashboardCgpa) {
        elements.dashboardCgpa.textContent =
            student.cgpa;
    }

}


/* ==================================================
   6. ATTENDANCE
   ================================================== */

function calculateAttendance() {

    let attended = 0;

    let total = 0;


    attendanceData.forEach(function (item) {

        attended += item.attended;

        total += item.total;

    });


    return Math.round(
        (attended / total) * 100
    );

}


function renderAttendance() {

    const overall =
        calculateAttendance();


    document.getElementById(
        "dashboardAttendance"
    ).textContent = `${overall}%`;


    document.getElementById(
        "attendanceCircleValue"
    ).textContent = `${overall}%`;


    const table =
        document.getElementById("attendanceTable");


    table.innerHTML = `

        <table class="attendance-table">

            <thead>

                <tr>
                    <th>Subject</th>
                    <th>Attendance</th>
                    <th>Percentage</th>
                    <th>Status</th>
                </tr>

            </thead>

            <tbody>

                ${attendanceData.map(function (item) {

                    const percentage =
                        Math.round(
                            (item.attended / item.total) * 100
                        );


                    const status =
                        percentage >= 75
                            ? "Good"
                            : "Low";


                    return `

                        <tr>

                            <td>
                                <strong>${item.subject}</strong>
                            </td>

                            <td>
                                ${item.attended}/${item.total}
                            </td>

                            <td>

                                <span class="progress-wrapper">

                                    <span
                                        class="progress-bar"
                                        style="width:${percentage}%"
                                    ></span>

                                </span>

                                ${percentage}%

                            </td>

                            <td>

                                <span class="badge ${
                                    percentage >= 75
                                        ? "success"
                                        : ""
                                }">

                                    ${status}

                                </span>

                            </td>

                        </tr>

                    `;

                }).join("")}

            </tbody>

        </table>

    `;

}


/* ==================================================
   7. ASSIGNMENTS
   ================================================== */

function formatDate(date) {

    const parts =
        date.split("-");

    return `${parts[2]} ${getMonthName(parts[1])}`;

}


function getMonthName(month) {

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    return months[
        Number(month) - 1
    ];

}


function saveAssignments() {

    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );

}


function renderAssignments() {

    const dashboardList =
        document.getElementById(
            "dashboardAssignmentsList"
        );


    const pageList =
        document.getElementById(
            "assignmentPageList"
        );


    const searchInput =
        document.getElementById(
            "assignmentSearch"
        );


    const filter =
        document.getElementById(
            "assignmentFilter"
        );


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const filterValue =
        filter
            ? filter.value
            : "all";


    const filtered =
        assignments.filter(function (assignment) {

            const matchesSearch =
                assignment.subject
                    .toLowerCase()
                    .includes(searchText) ||

                assignment.title
                    .toLowerCase()
                    .includes(searchText);


            const matchesFilter =
                filterValue === "all" ||

                (filterValue === "pending" &&
                    !assignment.completed) ||

                (filterValue === "completed" &&
                    assignment.completed);


            return matchesSearch && matchesFilter;

        });


    if (dashboardList) {

        dashboardList.innerHTML =
            assignments
                .slice(0, 3)
                .map(function (assignment) {

                    return `

                        <div class="assignment-row">

                            <div class="assignment-info">

                                <strong>
                                    ${assignment.subject}
                                </strong>

                                <p>
                                    ${assignment.title}
                                </p>

                            </div>

                            <span class="due-date">
                                ${formatDate(assignment.dueDate)}
                            </span>

                        </div>

                    `;

                }).join("");

    }


    if (pageList) {

        pageList.innerHTML =
            filtered
                .map(function (assignment) {

                    return `

                        <div class="assignment-card ${
                            assignment.completed
                                ? "completed"
                                : "pending"
                        }">

                            <div class="assignment-card-header">

                                <span class="status ${
                                    assignment.completed
                                        ? "completed"
                                        : "pending"
                                }">

                                    ${
                                        assignment.completed
                                            ? "Completed"
                                            : "Pending"
                                    }

                                </span>

                                <span>
                                    📅 ${formatDate(assignment.dueDate)}
                                </span>

                            </div>

                            <h3>
                                ${assignment.subject}
                            </h3>

                            <p>
                                ${assignment.title}
                            </p>

                            <br>

                            <button
                                class="text-button"
                                onclick="toggleAssignment(${assignment.id})"
                            >

                                ${
                                    assignment.completed
                                        ? "Mark Pending"
                                        : "Mark Completed"
                                }

                            </button>

                        </div>

                    `;

                }).join("");

    }


    const count =
        document.getElementById(
            "dashboardAssignments"
        );


    if (count) {

        count.textContent =
            assignments.filter(
                a => !a.completed
            ).length;

    }

}


function toggleAssignment(id) {

    const assignment =
        assignments.find(
            a => a.id === id
        );


    if (assignment) {

        assignment.completed =
            !assignment.completed;

        saveAssignments();

        renderAssignments();

    }

}


/* ==================================================
   8. ADD ASSIGNMENT
   ================================================== */

const assignmentModal =
    document.getElementById("assignmentModal");


document
    .getElementById("addAssignmentButton")
    .addEventListener("click", function () {

        assignmentModal.classList.remove("hidden");

    });


document
    .getElementById("closeModal")
    .addEventListener("click", function () {

        assignmentModal.classList.add("hidden");

    });


document
    .getElementById("assignmentForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const subject =
            document.getElementById("newSubject").value;


        const title =
            document.getElementById("newTitle").value;


        const dueDate =
            document.getElementById("newDueDate").value;


        assignments.push({

            id: Date.now(),

            subject: subject,

            title: title,

            dueDate: dueDate,

            completed: false

        });


        saveAssignments();

        renderAssignments();


        event.target.reset();

        assignmentModal.classList.add("hidden");

    });


/* ==================================================
   9. NOTICES
   ================================================== */

function renderNotices() {

    const dashboardList =
        document.getElementById(
            "dashboardNoticesList"
        );


    const pageList =
        document.getElementById(
            "noticePageList"
        );


    const searchInput =
        document.getElementById(
            "noticeSearch"
        );


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const filtered =
        notices.filter(function (notice) {

            return notice.title
                .toLowerCase()
                .includes(searchText);

        });


    const createNoticeHTML =
        function (notice) {

            return `

                <div class="notice-card">

                    <span class="badge success">
                        ${notice.category}
                    </span>

                    <h3>
                        ${notice.title}
                    </h3>

                    <p>
                        📅 ${notice.date}
                    </p>

                </div>

            `;

        };


    if (dashboardList) {

        dashboardList.innerHTML =
            notices
                .slice(0, 3)
                .map(createNoticeHTML)
                .join("");

    }


    if (pageList) {

        pageList.innerHTML =
            filtered
                .map(createNoticeHTML)
                .join("");

    }

}


/* ==================================================
   10. EVENTS
   ================================================== */

function renderEvents() {

    const container =
        document.getElementById(
            "eventPageList"
        );


    const searchInput =
        document.getElementById(
            "eventSearch"
        );


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const filtered =
        events.filter(function (event) {

            return event.title
                .toLowerCase()
                .includes(searchText);

        });


    container.innerHTML =
        filtered.map(function (event) {

            return `

                <div class="event-card">

                    <div class="event-banner">
                        ${event.icon}
                    </div>

                    <div class="event-content">

                        <h3>
                            ${event.title}
                        </h3>

                        <p>
                            📅 ${event.date}
                        </p>

                        <p>
                            📍 ${event.location}
                        </p>

                    </div>

                </div>

            `;

        }).join("");

}


/* ==================================================
   11. TIMETABLE
   ================================================== */

function renderTimetable() {

    const container =
        document.getElementById(
            "timetableGrid"
        );


    container.innerHTML =
        Object.keys(timetable)
            .map(function (day) {

                return `

                    <div class="day-card">

                        <h3>${day}</h3>

                        ${timetable[day]
                            .map(function (item) {

                                return `

                                    <div class="class-item">

                                        <strong>
                                            ${item[1]}
                                        </strong>

                                        <span>
                                            ${item[0]}
                                        </span>

                                    </div>

                                `;

                            }).join("")}

                    </div>

                `;

            }).join("");

}


/* ==================================================
   12. MARKS TABLE
   ================================================== */

function renderMarks() {

    const container =
        document.getElementById(
            "marksTable"
        );


    container.innerHTML = `

        <table class="marks-table">

            <thead>

                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>

            </thead>

            <tbody>

                ${marksData.map(function (item) {

                    return `

                        <tr>

                            <td>
                                ${item.subject}
                            </td>

                            <td>
                                ${item.marks}/100
                            </td>

                            <td>
                                <span class="badge success">
                                    ${item.grade}
                                </span>
                            </td>

                        </tr>

                    `;

                }).join("")}

            </tbody>

        </table>

    `;

}


/* ==================================================
   13. CHARTS
   ================================================== */

function createCharts() {

    const performanceCanvas =
        document.getElementById(
            "performanceChart"
        );


    const cgpaCanvas =
        document.getElementById(
            "cgpaChart"
        );


    if (performanceCanvas) {

        new Chart(
            performanceCanvas,
            {

                type: "bar",

                data: {

                    labels: [
                        "Sem 1",
                        "Sem 2",
                        "Sem 3",
                        "Sem 4",
                        "Sem 5"
                    ],

                    datasets: [

                        {
                            label: "CGPA",

                            data: [
                                7.4,
                                7.8,
                                8.0,
                                8.2,
                                8.4
                            ],

                            backgroundColor: [
                                "#93c5fd",
                                "#60a5fa",
                                "#3b82f6",
                                "#2563eb",
                                "#7c3aed"
                            ],

                            borderRadius: 6

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    scales: {

                        y: {

                            beginAtZero: false,

                            min: 6,

                            max: 10

                        }

                    },

                    plugins: {

                        legend: {
                            display: false
                        }

                    }

                }

            }
        );

    }


    if (cgpaCanvas) {

        new Chart(
            cgpaCanvas,
            {

                type: "line",

                data: {

                    labels: [
                        "Sem 1",
                        "Sem 2",
                        "Sem 3",
                        "Sem 4",
                        "Sem 5"
                    ],

                    datasets: [

                        {

                            label: "CGPA",

                            data: [
                                7.4,
                                7.8,
                                8.0,
                                8.2,
                                8.4
                            ],

                            borderColor: "#2563eb",

                            backgroundColor:
                                "rgba(37, 99, 235, 0.1)",

                            fill: true,

                            tension: 0.4

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    scales: {

                        y: {

                            min: 6,

                            max: 10

                        }

                    }

                }

            }
        );

    }

}


/* ==================================================
   14. NAVIGATION
   ================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


const pageSections =
    document.querySelectorAll(".page-section");


function showSection(sectionId) {

    pageSections.forEach(function (section) {

        section.classList.remove(
            "active-section"
        );

    });


    const selected =
        document.getElementById(sectionId);


    if (selected) {

        selected.classList.add(
            "active-section"
        );

    }


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.dataset.section === sectionId
        ) {

            link.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showSection(
                link.dataset.section
            );

        }
    );

});


/* View All buttons */

document
    .querySelectorAll("[data-section]")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const section =
                    button.dataset.section;

                showSection(section);

            }
        );

    });


/* ==================================================
   15. SEARCH
   ================================================== */

document
    .getElementById("globalSearch")
    .addEventListener("input", function () {

        const value =
            this.value.toLowerCase();


        if (!value) {
            return;
        }


        if (
            assignments.some(
                a =>
                    a.title
                        .toLowerCase()
                        .includes(value) ||

                    a.subject
                        .toLowerCase()
                        .includes(value)
            )
        ) {

            showSection("assignments");

            document.getElementById(
                "assignmentSearch"
            ).value = value;

            renderAssignments();

            return;

        }


        if (
            notices.some(
                n =>
                    n.title
                        .toLowerCase()
                        .includes(value)
            )
        ) {

            showSection("notices");

            document.getElementById(
                "noticeSearch"
            ).value = value;

            renderNotices();

            return;

        }


        if (
            events.some(
                e =>
                    e.title
                        .toLowerCase()
                        .includes(value)
            )
        ) {

            showSection("events");

            document.getElementById(
                "eventSearch"
            ).value = value;

            renderEvents();

        }

    });


document
    .getElementById("assignmentSearch")
    .addEventListener("input", renderAssignments);


document
    .getElementById("assignmentFilter")
    .addEventListener("change", renderAssignments);


document
    .getElementById("noticeSearch")
    .addEventListener("input", renderNotices);


document
    .getElementById("eventSearch")
    .addEventListener("input", renderEvents);


/* ==================================================
   16. DARK MODE
   ================================================== */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeToggle.textContent =
        "☀️ Light Mode";

}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.textContent =
                "☀️ Light Mode";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.textContent =
                "🌙 Dark Mode";

        }

    }
);


/* ==================================================
   17. CURRENT DATE
   ================================================== */

function showCurrentDate() {

    const date =
        new Date();


    const formatted =
        date.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );


    document.getElementById(
        "currentDate"
    ).textContent = formatted;

}


/* ==================================================
   18. RENDER EVERYTHING
   ================================================== */

function renderAll() {

    updateStudentUI();

    renderAttendance();

    renderAssignments();

    renderNotices();

    renderEvents();

    renderTimetable();

    renderMarks();

    showCurrentDate();

    createCharts();

}


/* ==================================================
   END
   ================================================== */