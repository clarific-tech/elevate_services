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
  // Format the message with all contact details
  const formattedMessage = `
New Quote Request from Elevate Services Website

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `.trim();

  const formData = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New Quote Request - Elevate Services',
    from_name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    message: formattedMessage,
  };

  // Check if access key is configured
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('Web3Forms access key is not configured');
    throw new Error('Email service is not configured. Please contact the website administrator.');
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Try to parse the response even if status is not ok
    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      const errorText = await response.text();
      console.error('Web3Forms API error - could not parse response:', response.status, errorText);
      throw new Error(`Failed to submit form: ${response.status} ${response.statusText}. ${errorText}`);
    }

    if (!response.ok) {
      console.error('Web3Forms API error:', response.status, result);
      throw new Error(result.message || `Failed to submit form: ${response.status} ${response.statusText}`);
    }
    
    if (!result.success) {
      console.error('Web3Forms submission failed:', result);
      throw new Error(result.message || 'Failed to submit form. Please try again.');
    }

    return result;
  } catch (error) {
    console.error('Error submitting quote form:', error);
    throw error;
  }
}

export async function submitContact(data: ContactFormData) {
  // Check if access key is configured
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('Web3Forms access key is not configured');
    throw new Error('Email service is not configured. Please contact the website administrator.');
  }

  // Format the message with all contact details
  const formattedMessage = `
New Contact Form Submission from Elevate Services Website

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `.trim();

  const formData = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New Contact Form - Elevate Services',
    from_name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    message: formattedMessage,
  };

  try {
    // Log what we're sending (without the access key for security)
    console.log('Submitting to Web3Forms:', {
      ...formData,
      access_key: formData.access_key ? '***configured***' : '***missing***'
    });

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Try to parse the response even if status is not ok
    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      const errorText = await response.text();
      console.error('Web3Forms API error - could not parse response:', response.status, errorText);
      throw new Error(`Failed to submit form: ${response.status} ${response.statusText}. ${errorText}`);
    }

    if (!response.ok) {
      console.error('Web3Forms API error:', response.status, result);
      throw new Error(result.message || `Failed to submit form: ${response.status} ${response.statusText}`);
    }
    
    if (!result.success) {
      console.error('Web3Forms submission failed:', result);
      throw new Error(result.message || 'Failed to submit form. Please try again.');
    }

    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}


