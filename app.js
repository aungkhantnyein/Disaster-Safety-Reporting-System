document.addEventListener("DOMContentLoaded", function () {

  // Login page
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const employeeId = document.getElementById("employeeId").value.trim();
      const password = document.getElementById("password").value.trim();

      if (employeeId === "" || password === "") {
        alert("社員番号とパスワードを入力してください。");
        return;
      }

      if (employeeId.toLowerCase() === "admin") {
        alert("管理者としてログインしました。");
        window.location.href = "admin.html";
      } else {
        alert("ログイン成功（ダミー）");
        window.location.href = "report.html";
      }
    });
  }

  // Report page
  const reportForm = document.querySelector('form[action="complete.html"]');

  if (reportForm) {
    reportForm.addEventListener("submit", function (e) {
      const statusSelect = reportForm.querySelector("select");
      const selectedStatus = statusSelect.value;

      if (selectedStatus === "選択してください") {
        e.preventDefault();
        alert("現在の状況を選んでください。");
        return;
      }

      const confirmSend = confirm("「" + selectedStatus + "」で送信しますか？");

      if (!confirmSend) {
        e.preventDefault();
      }
    });
  }

});
