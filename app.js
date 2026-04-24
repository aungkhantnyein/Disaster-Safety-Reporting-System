document.addEventListener("DOMContentLoaded", function () {

  // ===== Login Page =====
  const loginForm = document.querySelector("form");

  if (window.location.pathname.includes("index.html")) {
    loginForm.addEventListener("submit", function (e) {
      const employeeId = document.getElementById("employeeId").value.trim();
      const password = document.getElementById("password").value.trim();

      if (employeeId === "" || password === "") {
        e.preventDefault();
        alert("社員番号とパスワードを入力してください。");
      } else {
        alert("ログイン成功（ダミー）");
      }
    });
  }

  // ===== Report Page =====
  if (window.location.pathname.includes("report.html")) {
    loginForm.addEventListener("submit", function (e) {
      const selectedStatus = document.querySelector(
        'input[name="status"]:checked'
      );

      if (!selectedStatus) {
        e.preventDefault();
        alert("現在の状況を選んでください。");
        return;
      }

      const confirmSend = confirm("この内容で送信しますか？");

      if (!confirmSend) {
        e.preventDefault();
      }
    });
  }

});