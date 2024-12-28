// Open a member's portfolio page
function openMemberPage(memberId) {
    window.location.href = `member.html?member=${memberId}`;
}

// Populate the member page with dynamic data
if (window.location.pathname.includes("member.html")) {
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get("member");

    // Team data
    const members = {
        Mahmoud: {
            name: "Mahmoud Farag",
            photo: "./Assets/farag.jpeg",
            bio: "Mahmoud is a backend developer with a keen interest and passion for the dynamic realms of cybersecurity and interested in pursuing a career as a Cybersecurity Engineer.",
            skills: ["Python", "PHP", "Laravel", "Networks"],
             linkedin: "https://www.linkedin.com/in/mahmoud-farag-220836227/"
        },
        Ahmed: {
            name: "Ahmed Hesham ayad",
            photo: "./Assets/Ahmed.jpeg",
            bio: "Ahmed is a backend developer who loves designing robust APIs and databases.",
            skills: ["PHP", "Laravel", "MySQL", "Python"],
            linkedin: "http://www.linkedin.com/in/ahmed-hesham-ayad-a865a3243"
        },
        Nasser: {
            name: "Mohamed Nasser",
            photo: "./Assets/Nasser.jpeg",
            bio: "Mohamed Nasser is a frontend developer with a passion for creating beautiful user experiences.",
            skills: ["HTML", "CSS", "React.js", "Bootstrap"],
            linkedin: "https://www.linkedin.com/in/janesmith"
        },
        Ta7rir: {
            name: "Muhammed Mahmoud",
            photo: "./Assets/ta7rir.jpeg",
            bio: "Muhammed Mahmoud is a frontend developer with a passion for creating beautiful user experiences.",
            skills: ["HTML", "CSS", "React.js", "Bootstrap"],
           linkedin: "https://www.linkedin.com/in/janesmith"
        },
        Mossab: {
            name: "Mossab Elhady",
            photo: "./Assets/mossab.jpeg",
            bio: "Omar Ahmed is a fullstack developer with a passion for creating beautiful user experiences and designing databases and API.",
            skills: ["Larave", "PHP", "React.js", "Bootstrap"],
            linkedin: "https://www.linkedin.com/in/mossaab-elhady-0298aa25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
    };

    const member = members[memberId];
    if (member) {
        document.getElementById("member-name").textContent = member.name;
        document.getElementById("member-photo").src = member.photo;
        document.getElementById("member-bio").textContent = member.bio;

        // Populate skills
        const skillsList = document.getElementById("member-skills");
        skillsList.innerHTML = '';
        member.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Populate LinkedIn
        const linkedinLink = document.getElementById("member-linkedin");
        linkedinLink.href = member.linkedin;
    } else {
        document.getElementById("member-profile").innerHTML = "<p>Member not found.</p>";
    }
}