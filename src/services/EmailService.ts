interface IMailTo {
	name: string;
	email: string;
}

interface IMailMessage {
	subject: string;
	body: string;
	attachment?: string[];
}

interface IMessageDTO {
	// Data Transfer Object (DDD)
	to: IMailTo;
	message: IMailMessage;
}

interface IEmailService {
	sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
	sendMail({ to, message }: IMessageDTO) {
		console.log(
			`Email de assunto ${message.subject}, enviado para ${to.name}. \n Conteudo: ${message.body}`
		);
	}
}

export default EmailService;
