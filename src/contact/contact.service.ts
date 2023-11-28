import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import * as mongoose from "mongoose";

import { Contact } from "./schemas/contact.schema";

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private contactModel: mongoose.Model<Contact>
  ) {}

  async addContact(contact: Contact): Promise<Contact> {
    const newMessage = await this.contactModel.create(contact);
    return newMessage;
  }
}
