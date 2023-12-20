export default function LiBlock({title, description}) {
    return (
      <li>
        <strong>{title}</strong> {description}
      </li>
    );
  }