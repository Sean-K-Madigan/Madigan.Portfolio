export function Footer() {
  return (
    <>
      <footer id="contact">

        <h4 className="footer-title"> Get in touch with me today!!</h4>

        <div className="contact-info">
            <p>Phone: (208) 488-1020</p>
            <p>Email: <a href= 'mailto:sean.k.a.madigan@gmail.com'>sean.k.a.madigan@gmail.com</a></p> 
            <p>LinkedIn: <a href="https://www.linkedin.com/in/sean-madigan-405350268/" target="_blank">Sean Madigan</a></p>
            <p>GitHub: <a href="https://github.com/Sean-K-Madigan" target="_blank">Sean-K-Madigan</a></p>
        </div>

        <form name='signUp' action='/action_page.php' onSubmit='return validateForm()' method='post'>

            <div className="emailAndMessage">
                <input id="email" type='text' name='email' placeholder='Email' required/>

                <textarea id="message-box" type="text" name="message" placeholder="Write your message here!" required></textarea>
            </div>

          <button id='sendBtn' type='submit'> Send </button>
        </form>


      </footer>
    </>
  );
}