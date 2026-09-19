import fs from 'fs';

let code = fs.readFileSync('src/app.js', 'utf8');

// 1. Target header for ContactSectionComponent
const p1 = code.indexOf('const ContactSectionComponent = () => {');
if (p1 === -1) throw new Error('ContactSectionComponent start not found');

const pEnd1 = code.indexOf('(0, F.jsx)("section"', p1);
if (pEnd1 === -1) throw new Error('section start not found');

const targetHeader = code.slice(p1, pEnd1);

const newHeader = `const ContactSectionComponent = () => {
  const [formData, setFormData] = _.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = _.useState(false);
  const [isSubmitting, setIsSubmitting] = _.useState(false);
  const [formError, setFormError] = _.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in all required fields (Full Name, Email, and Your Message).");
      return;
    }

    setIsSubmitting(true);

    const lines = [
      "New contact form submission",
      "Name: " + formData.name.trim(),
      "Email: " + formData.email.trim()
    ];
    if (formData.phone && formData.phone.trim()) {
      lines.push("Phone: " + formData.phone.trim());
    }
    lines.push("Message: " + formData.message.trim());

    const messageText = lines.join("\\n");
    const waUrl = "https://wa.me/254740807650?text=" + encodeURIComponent(messageText);

    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      window.location.href = waUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return `;

code = code.replace(targetHeader, newHeader);

// 2. Target success state in ContactSectionComponent
const p2 = code.indexOf('Asante Sana! Message Received');
if (p2 === -1) throw new Error('Asante Sana not found');

const pStart2 = code.lastIndexOf('submitted ? (0, F.jsxs)', p2);
const pEnd2 = code.indexOf(': (0, F.jsxs)("form"', p2);
const targetSuccess = code.slice(pStart2, pEnd2);

const newSuccess = `submitted ? (0, F.jsxs)("div", {
                className: "text-center py-10 space-y-4 animate-in fade-in",
                children: [
                  (0, F.jsx)("div", {
                    className: "w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner",
                    children: (0, F.jsx)(je, { className: "w-8 h-8" })
                  }),
                  (0, F.jsx)("h3", {
                    className: "text-2xl font-bold text-slate-900 font-serif",
                    children: "Opening WhatsApp to send your message to our Nairobi team"
                  }),
                  (0, F.jsxs)("p", {
                    className: "text-slate-600 text-sm max-w-md mx-auto leading-relaxed",
                    children: [
                      "Thank you, ",
                      (0, F.jsx)("strong", { children: formData.name }),
                      ". Your inquiry has been prepared for our WhatsApp Helpdesk at ",
                      (0, F.jsx)("strong", { className: "text-emerald-700 font-semibold", children: "+254 740 807 650" }),
                      ". If WhatsApp did not open automatically, tap below to send it directly to our desk."
                    ]
                  }),
                  (0, F.jsxs)("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2",
                    children: [
                      (0, F.jsxs)("a", {
                        href: "https://wa.me/254740807650?text=" + encodeURIComponent(
                          ["New contact form submission", "Name: " + formData.name.trim(), "Email: " + formData.email.trim(), formData.phone ? "Phone: " + formData.phone.trim() : "", "Message: " + formData.message.trim()].filter(Boolean).join("\\n")
                        ),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2",
                        children: [
                          (0, F.jsx)(Xe, { className: "w-4 h-4" }),
                          "Open WhatsApp Chat"
                        ]
                      }),
                      (0, F.jsx)("button", {
                        onClick: () => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", message: "" });
                        },
                        className: "px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-all cursor-pointer",
                        children: "Send Another Message"
                      })
                    ]
                  })
                ]
              }) `;

code = code.replace(targetSuccess, newSuccess);

// 3. Render formError in the form if present
const pForm = code.indexOf(': (0, F.jsxs)("form", {');
const pFormChildren = code.indexOf('children: [', pForm);
const oldFormChildren = code.slice(pFormChildren, pFormChildren + 20);
code = code.replace(
  oldFormChildren,
  `children: [ formError && (0, F.jsx)("div", { className: "p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold", children: formError }), `
);

fs.writeFileSync('src/app.js', code, 'utf8');
console.log('Successfully updated src/app.js!');
