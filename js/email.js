export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const formData = await request.json();

    const payload = {
      service_id: env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id: env.EMAILJS_PUBLIC_KEY,
      template_params: {
        full_name: formData.full_name,
        user_email: formData.user_email,
        phone: formData.phone,
        pickup_location: formData.pickup_location,
        drop_location: formData.drop_location,
        date: formData.date,
        time: formData.time,
        message: formData.message
      }
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    } else {
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
  }
}
