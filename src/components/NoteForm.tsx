import { useRef } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"

function NoteForm() {
	const titleRef = useRef<HTMLInputElement>(null)
	const markdownRef = useRef<HTMLTextAreaElement>(null)

	return (
		<Form>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control ref={titleRef} required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<CreatableReactSelect isMulti />
						</Form.Group>
					</Col>
				</Row>

				{/* Markdown */}
				<Form.Group controlId="markdown">
					<Form.Label>Body</Form.Label>
					<Form.Control required as="textarea" ref={markdownRef} rows={15} />
				</Form.Group>

				<Stack direction="horizontal" gap={2} className="justify-content-end">
					<Button type="submit" variant="outline-success">
						Save
					</Button>
					<Link to="..">
						<Button type="button" variant="outline-danger">
							Cancel
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Form>
	)
}

export default NoteForm
