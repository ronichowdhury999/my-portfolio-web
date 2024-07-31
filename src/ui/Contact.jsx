import Container from "./Container"

const Contact = () => {
  return (
    <Container className="py-10 lg:py-32 flex flex-col gap-4 items-center justify-center" id="contact">
      <p className="text-lg text-designColor font-semibold tracking-wide">04, Whats Next? </p>
      <h2 className="text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-center text-darkText">Although i am not currently fo any new opportunities, my inbox is always open.Whether you have a question or just want to say hi ,ill try by best to get back to you!</p>
      <a href="mailto:mdronii961@gmail.com">
        <p className="w-40 h-14 border border-designColor font-semibold mt-6 text-sm text-designColor tracking-wide rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">Say Hello</p>
      </a>
    </Container>
  )
}

export default Contact