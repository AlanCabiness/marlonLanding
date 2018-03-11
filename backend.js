function logout() {
    localStorage.removeItem("session");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("userType");
    window.location.reload();
}