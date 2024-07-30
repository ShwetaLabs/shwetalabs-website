export interface formFieldSpec {
  title: string;
  placeholder: string;
}
export interface contactSpec {
  title: string;
  description: string;
  form: { [key: string]: formFieldSpec };
}
export const contactData = {
  title: 'Contact Us',
  description: 'Take the next step of your investigation with us.',
  message: `<span class="fw-bold">Note:</span> Due to personal privacy and security issues, we cannot provide information about specific individuals at Shweta Labs, including email addresses and telephone numbers.`,
  form: {
    firstName: {
      title: 'First name',
      placeholder: 'Enter First Name',
    },
    lastName: {
      title: 'Last name',
      placeholder: 'Enter Last Name',
    },
    emailAddress: {
      title: 'Email address',
      placeholder: 'Enter Email Address',
    },
    message: {
      title: 'Your message',
      placeholder: 'Type your message here.',
    },
  },
};
