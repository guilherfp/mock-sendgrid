export interface Email {
  email: string;
  name: string;
}

export interface Personalizations {
  to: Email[];
}

export interface Content {
  type: String;
  value: String;
}

export interface SendMail {
  from: Email;
  subject: string;
  personalizations: Personalizations[];
  content: Content[];
}

export interface StoragedMail extends SendMail {
  id: string;
  moment: string;
}
