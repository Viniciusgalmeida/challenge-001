interface HeadingProps {
  title: string;
  subtitle: string;
  additionalText?: string;
}

const Heading = ({
  title,
  subtitle,
  additionalText,
}: HeadingProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {additionalText && <p>{additionalText}</p>}
    </div>
  );
};

export default Heading;
