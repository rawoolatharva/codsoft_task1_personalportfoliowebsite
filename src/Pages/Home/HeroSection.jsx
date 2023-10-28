export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey! I'm Atharva</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">FrontEnd</span> <br />
            Developer
          </h1>
          <p className="hero--section--description">
            ReactJS Intern@CodSoft | Passionate about Crafting
            <br />
            User-Centric Web Experiences | Transitioned from Solar Industry
          </p>
        </div>
        <a href="https://www.linkedin.com/in/atharvarawool/">
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  )
}
