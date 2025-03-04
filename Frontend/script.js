// Switch between Login and Signup forms
function switchTab(tab) {
    if (tab === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-tab').classList.add('active');
        document.getElementById('signup-tab').classList.remove('active');
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('signup-tab').classList.add('active');
        document.getElementById('login-tab').classList.remove('active');
    }
}

// Placeholder function for getting career recommendation
function showRecommendation() {
    const department = document.getElementById('department-select').value;
    const domain = document.getElementById('domain-select').value;
    const level = document.getElementById('level-select').value;

    const recommendation = `You have selected ${department} with a ${domain} level for a ${level} role.`;
    
    document.getElementById('recommendation-result').style.display = 'block';
    document.getElementById('recommendation-result').innerHTML = `<p>${recommendation}</p>`;
}
function switchTab(tab) {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");

    if (tab === "login") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
    } else {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
    }
}
