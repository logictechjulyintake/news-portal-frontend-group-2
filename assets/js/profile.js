function openNewsContent() {
    id("profileNewsBtn").className = "active";
    id("profileAccountBtn").className = "";
    id("profileContentNews").style.display = "block";
    id("profileContentAccountInfo").style.display = "none";
}

function openAccountContent() {
    id("profileNewsBtn").className = "";
    id("profileAccountBtn").className = "active";
    id("profileContentNews").style.display = "none";
    id("profileContentAccountInfo").style.display = "block";
}