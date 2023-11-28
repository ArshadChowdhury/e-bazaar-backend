import { Body, Controller, Post } from "@nestjs/common";

import { ContactDto } from "./dto/contact.dto";
import { ContactService } from "./contact.service";
import { Contact } from "./schemas/contact.schema";

@Controller("contact")
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post("arshad")
  async createNewContact(
    @Body()
    contact: ContactDto
  ): Promise<Contact> {
    return this.contactService.addContact(contact);
  }
}
