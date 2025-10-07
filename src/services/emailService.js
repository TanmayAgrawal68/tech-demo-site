import emailjs from "@emailjs/browser";

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("✅ Email sent successfully:", response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return { success: false, error };
  }
};
export const sendConnectionEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONNECTION_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("✅ Email sent successfully:", response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return { success: false, error };
  }
};
