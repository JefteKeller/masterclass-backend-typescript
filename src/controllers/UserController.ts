import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
	{
		name: "Jefte Keller",
		email: "jeftekeller@gmail.com",
	},
	{
		name: "Bacon Leitão Nascimento",
		email: "baconthedognascimento@gmail.com",
	},
];

export default {
	async index(req: Request, res: Response) {
		return res.json(users);
	},

	async create(req: Request, res: Response) {
		const emailService = new EmailService();

		emailService.sendMail({
			to: users[1],
			message: {
				subject: "Greetings",
				body: "Testando o servico de email",
			},
		});

		res.send("Email enviado");
	},
};
