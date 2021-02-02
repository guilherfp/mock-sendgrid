import { Injectable } from '@nestjs/common';
import { StoragedMail } from './models/email';

@Injectable()
export class AppService {
  private emails: StoragedMail[] = [];

  saveEmail(email: StoragedMail) {
    this.emails.push(email);
  }

  getEmails() {
    return this.emails;
  }

  getEmail(id: string) {
    return this.emails.find(email => email.id === id);
  }
}
