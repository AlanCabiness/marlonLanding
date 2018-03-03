function logout() {
    localStorage.removeItem("session");
    localStorage.removeItem("loggedUser");
    window.location.reload();
}