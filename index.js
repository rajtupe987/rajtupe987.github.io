

GitHubCalendar(".calendar", "rajtupe987");

// or enable responsive functionality:
GitHubCalendar(".calendar", "rajtupe987", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "rajtupe987", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${rajtupe987}`)
   }
}).then(r => r.text())