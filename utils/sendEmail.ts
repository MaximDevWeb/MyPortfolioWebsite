import { Email } from "~/utils/smtp";
import { MessageType } from "assets/types/app";

export default class Message {
  private name: string;
  private email: string;
  private message: string;
  private token: string = "a78ea7b9-fb5c-41a2-b5b2-67d95056d4f7";

  constructor(data: MessageType) {
    this.name = data.name;
    this.email = data.email;
    this.message = data.message;
  }

  public send = async () => {
    Email.send({
      SecureToken: this.token,
      To: "maxim.dev.web@gmail.com",
      From: "robot@maxim-dev.ru",
      Subject: "Сообщение с портфолио",
      Body: `
      <h2>Сообщение с сайта портфолио</h2>
      
      <p><b>Имя:</b> ${this.name} </p>
      <p><b>Email:</b> ${this.email} </p>
      <p><b>Сообщение:</b> ${this.message} </p>
      `,
    });
  };
}
