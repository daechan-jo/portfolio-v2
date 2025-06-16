"use client"

import type React from "react"

import {useState} from "react"
import {motion} from "framer-motion"
import {Send} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useToast} from "@/hooks/use-toast"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription
} from "@/components/ui/dialog"

export function ContactForm() {
	const {toast} = useToast()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showDialog, setShowDialog] = useState(false)
	const [dialogContent, setDialogContent] = useState({
		title: "",
		description: ""
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		const formData = new FormData(e.currentTarget)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			subject: formData.get('subject'),
			message: formData.get('message')
		}

		try {
			const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					service_id: 'service_tnfpxet',
					template_id: 'template_6rn2lcw',
					user_id: 'AimS8nckmaUjDbcG2',
					template_params: {
						to_email: 'daechan476@gmail.com',
						from_name: data.name,
						from_email: data.email,
						subject: data.subject,
						message: data.message
					}
				})
			})


			if (response.status === 200) {
				setDialogContent({
					title: "Message sent!",
					description: "Thanks for reaching out. I'll get back to you soon."
				})
			} else {
				throw new Error('Failed to send message')
			}
		} catch (error) {
			setDialogContent({
				title: "Error",
				description: "Failed to send message. Please try again later."
			})
		} finally {
			setShowDialog(true)
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<Dialog open={showDialog} onOpenChange={setShowDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{dialogContent.title}</DialogTitle>
						<DialogDescription>{dialogContent.description}</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>

			<motion.div
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.5}}
				viewport={{once: true}}
			>
				<div
					className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 hover:border-gray-400">
					<div
						className="absolute -inset-1 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

					<div className="relative">
						<h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<Input
									name="name"
									placeholder="Your Name"
									required
									className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-gray-500/20"
								/>
							</div>
							<div className="space-y-2">
								<Input
									name="email"
									type="email"
									placeholder="Your Email"
									required
									className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-gray-500/20"
								/>
							</div>
							<div className="space-y-2">
								<Input
									name="subject"
									placeholder="Subject"
									required
									className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-gray-500/20"
								/>
							</div>
							<div className="space-y-2">
								<Textarea
									name="message"
									placeholder="Your Message"
									rows={5}
									required
									className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-gray-500/20"
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900 border-0"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>Sending...</>
								) : (
									<>
										Send Message <Send className="ml-2 h-4 w-4"/>
									</>
								)}
							</Button>
						</form>
					</div>
				</div>
			</motion.div>
		</>
	)
}
