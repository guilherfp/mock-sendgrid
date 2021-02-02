import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { format } from 'date-fns';
import { AppService } from './app.service';
import { SendMail } from './models/email';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const emails = this.appService.getEmails();
    return { emails };
  }

  @Get('/:id/preview')
  @Render('preview')
  preview(@Param('id') id: string) {
    const email = this.appService.getEmail(id);
    return { email };
  }

  @Get('/:id/html')
  html(@Param('id') id: string) {
    return this.appService.getEmail(id).content[0].value;
  }

  @HttpCode(202)
  @Post('/v3/mail/send')
  send(@Body() mail: SendMail): void {
    const now = new Date();
    const id = format(now, 'T');
    const moment = format(now, 'dd/MM/yy HH:mm:ss');
    this.appService.saveEmail({ id, moment, ...mail });
  }
}
