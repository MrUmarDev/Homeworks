import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Admin } from '../admin/models/admin.model';
import { Customer } from '../customer/models/customer.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
      private readonly mailService: MailerService,
      private readonly configService: ConfigService,
  ) {}

  async sendAdminConfirmation(admin: Admin): Promise<void> {
    const activation_url = `${this.configService.get('API_HOST')}/api/admin/activate/${admin.activation_link}`;

    await this.mailService.sendMail({
      to: admin.email,
      subject: 'Welcome! Please confirm your email',
      template: './confirmation',
      context: {
        name: admin.username,
        url: activation_url,
      },
    });
  }

  async sendCustomerConfirmation(customer: Customer): Promise<void> {
    const activation_url = `${this.configService.get('API_HOST')}/api/customer/activate/${customer.activation_link}`;

    await this.mailService.sendMail({
      to: customer.email,
      subject: 'Welcome! Please confirm your email',
      template: './confirmation',
      context: {
        name: customer.username,
        url: activation_url,
      },
    });
  }
}
