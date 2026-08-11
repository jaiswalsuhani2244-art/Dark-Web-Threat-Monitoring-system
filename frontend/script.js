// ======================================================
// DARK WEB THREAT MONITORING DASHBOARD
// Main JavaScript File
// ======================================================



// ======================================================
// THREAT DATA
// ======================================================

const threats = [
    {
        title: "Ransomware Leak",
        risk: "High"
    },
    {
        title: "Credit Card Dump",
        risk: "Medium"
    },
    {
        title: "Phishing Attack",
        risk: "Low"
    }
];

console.log("Threat Data Loaded");
console.log(threats);



// ======================================================
// DASHBOARD BAR CHART
// ======================================================

const threatChart = document.getElementById("threatChart");

if (threatChart) {

    new Chart(threatChart, {

        type: "bar",

        data: {

            labels: ["High", "Medium", "Low"],

            datasets: [{

                label: "Threat Levels",

                data: [12, 19, 7],

                backgroundColor: [

                    "#ef4444",
                    "#f59e0b",
                    "#22c55e"

                ],

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    },

                    grid: {

                        color: "#334155"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    },

                    grid: {

                        color: "#334155"

                    }

                }

            }

        }

    });

}


// ======================================================
// LIVE DIGITAL CLOCK
// ======================================================

function updateTime() {

    const liveTime = document.getElementById("liveTime");

    if (!liveTime) return;

    const now = new Date();

    liveTime.innerHTML = now.toLocaleTimeString();

}

updateTime();

setInterval(updateTime, 1000);



// ======================================================
// POP-UP ALERT NOTIFICATION
// ======================================================

setTimeout(() => {

    const alertBox = document.getElementById("alert-box");

    if (alertBox) {

        alertBox.style.display = "block";

        setTimeout(() => {

            alertBox.style.display = "none";

        }, 5000);

    }

}, 2000);



/*
// ======================================================
// DASHBOARD CARD COUNTER ANIMATION
// ======================================================

const finalValues = [128, 34, 89, 12];

const cardNumbers = document.querySelectorAll(".card p");

cardNumbers.forEach((card, index) => {

    let count = 0;

    const target = finalValues[index];

    const interval = setInterval(() => {

        count++;

        card.innerHTML = count;

        if (count >= target) {

            clearInterval(interval);

        }

    }, 20);

});
*/
// ======================================================
// SEARCH BOX EFFECT
// ======================================================

const searchBox = document.querySelector(".search-box");

if (searchBox) {

    searchBox.addEventListener("focus", () => {

        searchBox.style.border = "2px solid #38bdf8";

    });

    searchBox.addEventListener("blur", () => {

        searchBox.style.border = "none";

    });

}



// ======================================================
// SMOOTH SCROLL FUNCTION
// ======================================================

function showSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    }

}
// ======================================================
// SETTINGS PAGE BUTTONS
// ======================================================

// Theme Button
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    });

}

// Notification
const notificationBtn = document.getElementById("notificationBtn");

if (notificationBtn) {

    notificationBtn.onclick = function(){

        alert("Notification Settings will be available in the backend version.");

    }

}

// ==========================================
// CHANGE PASSWORD
// ==========================================

const passwordBtn = document.getElementById("passwordBtn");

if (passwordBtn) {

    passwordBtn.onclick = function () {

        let savedPassword = localStorage.getItem("adminPassword") || "admin123";

        let currentPassword = prompt("Enter Current Password:");

        if (currentPassword === null) return;

        if (currentPassword !== savedPassword) {

            alert("Incorrect current password!");
            return;

        }

        let newPassword = prompt("Enter New Password:");

        if (newPassword === null || newPassword.trim() === "") {

            alert("Password cannot be empty.");
            return;

        }

        let confirmPassword = prompt("Confirm New Password:");

        if (confirmPassword !== newPassword) {

            alert("Passwords do not match!");
            return;

        }

        localStorage.setItem("adminPassword", newPassword);

        const today = new Date();

        const updateText =
            "Last Updated: " +
            today.toLocaleDateString() +
            " " +
            today.toLocaleTimeString();

        localStorage.setItem("passwordStatus", updateText);

        document.getElementById("passwordStatus").innerHTML = updateText;

        alert("Password changed successfully!");

    };

}

// ==========================================
// EDIT PROFILE
// ==========================================

const profileBtn = document.getElementById("profileBtn");

if (profileBtn) {

    profileBtn.onclick = function () {

        let currentName = localStorage.getItem("adminName") || "Admin";

        let newName = prompt("Enter Administrator Name:", currentName);

        if (newName && newName.trim() !== "") {

            localStorage.setItem("adminName", newName);

            document.querySelectorAll(".profile").forEach(profile => {
                profile.innerHTML = "👤 " + newName;
            });

            const accountStatus = document.getElementById("accountStatus");

            if (accountStatus) {
                accountStatus.innerHTML = newName;
            }

            alert("Profile updated successfully!");

        }

    };

}
// Auto Reports
const reportBtn=document.getElementById("reportBtn");

if(reportBtn){

    reportBtn.onclick=function(){

        alert("Auto Report configuration saved successfully.");

    }

}

// Backup
const backupBtn=document.getElementById("backupBtn");

if(backupBtn){

    backupBtn.onclick=function(){

        alert("Backup Completed Successfully.");

    }

}

// Threat Sources
const sourceBtn=document.getElementById("sourceBtn");

if(sourceBtn){

    sourceBtn.onclick=function(){

        alert("Threat Sources management will be added in backend.");

    }

}

// Firewall
const firewallBtn=document.getElementById("firewallBtn");

if(firewallBtn){

    firewallBtn.onclick=function(){

        alert("Firewall Settings Updated.");

    }

}



// ======================================================
// REPORT PAGE BUTTONS
// ======================================================

// Print

const printBtn=document.getElementById("printBtn");

if(printBtn){

    printBtn.onclick=function(){

        window.print();

    }

}

// ==========================================
// EXPORT PDF
// ==========================================

const pdfBtn = document.getElementById("pdfBtn");

if (pdfBtn) {

    pdfBtn.onclick = function () {

        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Dark Web Threat Monitoring Dashboard", 20, 20);

        doc.setFontSize(14);
        doc.text("Cyber Security Report", 20, 35);

        doc.setFontSize(11);

        doc.text("Generated By : Admin", 20, 50);
        doc.text("Status : Completed", 20, 60);
        doc.text("Date : " + new Date().toLocaleDateString(), 20, 70);

        doc.text("Summary:", 20, 90);

        doc.text("- Threat monitoring completed successfully.", 25, 105);
        doc.text("- Alerts analyzed.", 25, 115);
        doc.text("- Analytics generated.", 25, 125);
        doc.text("- Reports exported successfully.", 25, 135);

        doc.save("Threat_Report.pdf");

    };

}



// ==========================================
// EXPORT EXCEL (CSV)
// ==========================================

const excelBtn = document.getElementById("excelBtn");

if (excelBtn) {

    excelBtn.onclick = function () {

        let csv = "Report ID,Report Name,Date,Status\n";

        const rows = document.querySelectorAll("#reportsTable tr");

        rows.forEach((row, index) => {

            if (index === 0) return; // Skip header

            const cols = row.querySelectorAll("td");

            if (cols.length >= 4) {

                csv +=
                    cols[0].innerText + "," +
                    cols[1].innerText + "," +
                    cols[2].innerText + "," +
                    cols[3].innerText + "\n";

            }

        });

        const blob = new Blob([csv], {
            type: "text/csv"
        });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "Threat_Report.csv";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    };

}
// ==========================================
// FETCH DASHBOARD DATA FROM FLASK BACKEND
// ==========================================


const totalThreatsCard = document.getElementById("totalThreats");

if (totalThreatsCard) {

    fetch("http://127.0.0.1:5000/dashboard")
        .then(response => response.json())
        .then(data => {

            document.getElementById("totalThreats").textContent = data.totalThreats;

            document.getElementById("highRiskAlerts").textContent = data.highRiskAlerts;

            document.getElementById("darkWebMentions").textContent = data.darkWebMentions;

            document.getElementById("activeInvestigations").textContent = data.activeInvestigations;

        })
        .catch(error => {

            console.error("Error fetching dashboard data:", error);

        });

}
   // ==========================================
// FETCH THREAT FEED + SEARCH + FILTER
// ==========================================


const threatFeed = document.getElementById("threatFeed");


if(threatFeed){

let allThreats = [];


fetch("http://127.0.0.1:5000/threats")

.then(response => response.json())

.then(data => {


    allThreats = data;

    displayThreats(allThreats);


})

.catch(error => {

    console.error("Error loading threats:", error);

});



function displayThreats(threats){


    threatFeed.innerHTML = "";


    threats.forEach(threat => {


        threatFeed.innerHTML += `

        <div class="threat-item ${threat.risk}">

            <h3>${threat.title}</h3>

            <p>Source : ${threat.source}</p>

            <p>Detected : ${threat.detected}</p>

            <p>Risk : ${threat.risk.toUpperCase()}</p>

        </div>

        `;


    });


}



// Search

const searchInput = document.getElementById("threatSearch");


const filter = document.getElementById("riskFilter");



function applyFilter(){


    let searchText = searchInput.value.toLowerCase();


    let riskValue = filter.value;



    let filtered = allThreats.filter(threat => {


        let matchesSearch =

        threat.title.toLowerCase().includes(searchText)

        ||

        threat.source.toLowerCase().includes(searchText);



        let matchesRisk =

        riskValue === "all"

        ||

        threat.risk === riskValue;



        return matchesSearch && matchesRisk;


    });



    displayThreats(filtered);


}



searchInput.addEventListener(
    "input",
    applyFilter
);


filter.addEventListener(
    "change",
    applyFilter
);


}
// ==========================================
// FETCH ALERTS FROM FLASK BACKEND
// ==========================================

const alertsContainer = document.getElementById("alertsContainer");

if (alertsContainer) {

    fetch("http://127.0.0.1:5000/alerts")
        .then(response => response.json())
        .then(data => {

            alertsContainer.innerHTML = "";

            data.forEach(alert => {

                let riskClass = "low";

                if (alert.severity === "Critical" || alert.severity === "High") {

                    riskClass = "high";

                } else if (alert.severity === "Medium") {

                    riskClass = "medium";

                }

                alertsContainer.innerHTML += `

                    <div class="threat-item ${riskClass}">

                        <h3>${alert.title}</h3>

                        <p>Severity : ${alert.severity}</p>

                        <p>Source : ${alert.source}</p>

                        <p>Detected : ${alert.time}</p>

                    </div>

                `;

            });

        })
        .catch(error => {

            console.error("Error loading alerts:", error);

        });

}
// ==========================================
// FETCH ANALYTICS FROM FLASK BACKEND
// ==========================================

const analyticsCanvas = document.getElementById("analyticsChart");
const trendCanvas = document.getElementById("trendChart");

if (analyticsCanvas && trendCanvas) {

    fetch("http://127.0.0.1:5000/analytics")
        .then(response => response.json())
        .then(data => {

            new Chart(analyticsCanvas, {

                type: "bar",

                data: {

                    labels: data.categories,

                    datasets: [{

                        label: "Threat Count",

                        data: data.counts,

                        backgroundColor: [

                            "#ef4444",
                            "#f59e0b",
                            "#22c55e",
                            "#3b82f6",
                            "#8b5cf6"

                        ]

                    }]

                },

                options: {

                    responsive: true,
                    maintainAspectRatio: false

                }

            });

            new Chart(trendCanvas, {

                type: "line",

                data: {

                    labels: data.months,

                    datasets: [{

                        label: "Monthly Threats",

                        data: data.monthlyThreats,

                        borderColor: "#38bdf8",

                        backgroundColor: "rgba(56,189,248,0.2)",

                        fill: true,

                        tension: 0.4

                    }]

                },

                options: {

                    responsive: true,
                    maintainAspectRatio: false

                }

            });

        })
        .catch(error => {

            console.error("Error loading analytics:", error);

        });

}
// ==========================================
// FETCH REPORTS FROM FLASK BACKEND
// ==========================================

const reportsTable = document.getElementById("reportsTable");

if (reportsTable) {

    fetch("http://127.0.0.1:5000/reports")
        .then(response => response.json())
        .then(data => {

            data.forEach(report => {

                let statusClass = "";

                if (report.status === "Completed") {

                    statusClass = "low-text";

                } else if (report.status === "Review") {

                    statusClass = "medium-text";

                } else {

                    statusClass = "high-text";

                }

                reportsTable.innerHTML += `

                    <tr>

                        <td>${report.id}</td>

                        <td>${report.name}</td>

                        <td>${report.date}</td>

                        <td class="${statusClass}">${report.status}</td>

                        <td>
    <button class="download-btn" onclick="downloadReport('${report.id}')">
        Download
    </button>
</td>

                    </tr>

                `;

            });

        })
        .catch(error => {

            console.error("Error loading reports:", error);

        });

}
// ==========================================
// FETCH SETTINGS FROM FLASK BACKEND
// ==========================================

fetch("http://127.0.0.1:5000/settings")
    .then(response => response.json())
    .then(data => {

        const theme = document.getElementById("themeStatus");
        if (theme) theme.textContent = data.theme;

        const notification = document.getElementById("notificationStatus");
        if (notification) notification.textContent = data.notifications;

        const password = document.getElementById("passwordStatus");
        if (password) password.textContent = data.password;

        const account = document.getElementById("accountStatus");
        if (account) account.textContent = data.account;

        const reports = document.getElementById("reportStatus");
        if (reports) reports.textContent = data.reports;

        const backup = document.getElementById("backupStatus");
        if (backup) backup.textContent = data.backup;

        const sources = document.getElementById("sourceStatus");
        if (sources) sources.textContent = data.sources;

        const firewall = document.getElementById("firewallStatus");
        if (firewall) firewall.textContent = data.firewall;

    })
    .catch(error => {

        console.error("Error loading settings:", error);

    });
    // ==========================================
// DOWNLOAD REPORT
// ==========================================

function downloadReport(reportId) {

    const reportContent = `
==========================================
Dark Web Threat Monitoring Dashboard
==========================================

Report ID : ${reportId}

Generated By : Admin

Status : Completed

------------------------------------------

This report contains cybersecurity
threat monitoring information,
alerts, analytics and investigations.

Generated Successfully.
`;

    const blob = new Blob([reportContent], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = reportId + ".txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
// ==========================================
// LOAD SAVED ADMIN NAME
// ==========================================

window.addEventListener("load", function () {

    let savedName = localStorage.getItem("adminName");

    if (savedName) {

        document.querySelectorAll(".profile").forEach(profile => {
            profile.innerHTML = "👤 " + savedName;
        });

        const accountStatus = document.getElementById("accountStatus");

        if (accountStatus) {
            accountStatus.innerHTML = savedName;
        }

    }

});
// ==========================================
// LOAD PASSWORD STATUS
// ==========================================

window.addEventListener("load", function () {

    const savedStatus = localStorage.getItem("passwordStatus");

    if (savedStatus) {

        document.getElementById("passwordStatus").innerHTML = savedStatus;

    }

});
// ==========================================
// SIDEBAR ADMIN CLICK
// ==========================================

const sidebarAdmin = document.getElementById("sidebarAdmin");

if (sidebarAdmin) {

    sidebarAdmin.style.cursor = "pointer";

    sidebarAdmin.addEventListener("click", function () {

        alert("Sidebar Admin Clicked!");

    });

}