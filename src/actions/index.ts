import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro/zod";
import { RESEND_API_KEY } from "astro:env/server";

const resend = new Resend(RESEND_API_KEY);

export const server = {
	sendMessage: defineAction({
		accept: "form",
		input: z.object({
			name: z.string().min(2),
			email: z.email(),
			interestedIn: z.string(),
			message: z.string(),
		}),

		handler: async (input) => {
			const { data, error } = await resend.emails.send({
				from: "The Noise Floor <info@contact.thenoisefloorjt.net>",
				to: ["noisefloorjt@gmail.com"],
				subject: `${input.name} sent a message`,
				html: `<h3>${input.name}</h3>
							 <p>is interested in learning more about ${input.interestedIn}</p>
							 <p>Here is the message they sent:</p>
               <p>${input.message}</p>
							 <p>and their contact email: ${input.email}</p>
               `,
			});
			if (data) {
				console.log("email response data: ", data);
			}

			if (error) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: error.message,
				});
			}

			return data;
		},
	}),
};
