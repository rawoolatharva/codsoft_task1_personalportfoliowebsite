export default function MySkills() {
  const techs = [
    {
      id: 1,
      src: './img/html.png',
      title: 'HTML',
      style:
        '0 4px 6px -1px rgba(249, 115, 22, 0.1), 0 2px 4px -1px rgba(249, 115, 22, 0.06)',
    },
    {
      id: 2,
      src: './img/css.png',
      title: 'CSS',
      style:
        '0 4px 6px -1px rgba(66, 153, 225, 0.1), 0 2px 4px -1px rgba(66, 153, 225, 0.06)',
    },
    {
      id: 3,
      src: './img/javascript.png',
      title: 'JavaScript',
      style:
        '0 4px 6px -1px rgba(236, 201, 75, 0.1), 0 2px 4px -1px rgba(236, 201, 75, 0.06)',
    },
    {
      id: 4,
      src: './img/react.png',
      title: 'React',
      style:
        '0 4px 6px -1px rgba(49, 130, 206, 0.1), 0 2px 4px -1px rgba(49, 130, 206, 0.06)',
    },
    {
      id: 5,
      src: './img/node.png',
      title: 'Node',
      style:
        '0 4px 6px -1px rgba(72, 187, 120, 0.1), 0 2px 4px -1px rgba(72, 187, 120, 0.06)',
    },
    {
      id: 6,
      src: './img/github.png',
      title: 'GitHub',
      style:
        '0 4px 6px -1px rgba(160, 174, 192, 0.1), 0 2px 4px -1px rgba(160, 174, 192, 0.06)',
    },
  ]
  return (
    <section id="mySkills" className="skills--section">
      <div className="skills--section--box">
        <div className="skills--section--content">
          <p className="skills--section--title">Skills</p>
          <h1 className="skills--section--heading">
            Technologies I have worked with
          </h1>
        </div>
      </div>
      <div className="skill--container">
        <div className="skills--section--card">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`skill--cont shadow-md py-2 rounded-lg`}>
              <img src={src} alt={`${title} logo`} className="skill-img" />
              <p className="skills--section--description">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
