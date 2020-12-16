import React from 'react'

 function Fotter() {
    return (
        <div>
         <section id="contact">
    <h2 className="text-important">contact me</h2>
    <form>
      <label>Full Name</label>
      <input type="text" placeholder="Name" />
      <label>Email</label>
      <input type="email" placeholder="Email" />
      <label>Message</label>
      <textarea rows={5} cols={40} defaultValue={""} />
      <button>Send</button>
    </form>
  </section>
  <footer>
    <p>Copyritghts © webdev 2020</p> <br/>
    <p>E-mail : jasser1heni@gmail.com</p>
  </footer>
</div>
   
       
    )
}
export default Fotter ;