const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitQuote(data: QuoteFormData) {
  const formData = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New Quote Request - Elevate Services',
    from_name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return response.json();
}

export async function submitContact(data: ContactFormData) {
  const formData = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New Contact Form - Elevate Services',
    from_name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return response.json();
}


