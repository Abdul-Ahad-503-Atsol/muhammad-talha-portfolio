export default function ExpertiseCard({ icon, number, title, text, tags }) {
  return (
    <article className="expertise-card">
      <div className="expertise-card-top">
        <span className="expertise-icon">{icon}</span>
        <span className="expertise-number">{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="expertise-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}
