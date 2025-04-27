const Contact = () => {
    return (
        <section id="contact" className="bg-cream py-5">
            <div className="container w-75 m-auto text-left">
                <h2 className="text-espresso mb-4">Get in Touch</h2>
                <p className="mb-4">
                    Have questions or want to know more about our products? We'd love to hear from you!
                </p>
                <form className="d-flex flex-column align-items-start">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control mb-3 w-50"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control mb-3 w-50"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="form-control mb-3 w-50"
                        rows={4}
                        required
                    />
                    <button type="submit" className="btn bg-olive text-white px-4 py-2">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
  };
  
  export default Contact;
  