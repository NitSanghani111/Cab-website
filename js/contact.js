document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch("https://your-worker-domain.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) {
      alert("Your booking was sent successfully!");
    } else {
      alert("Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send form.");
  }
});
