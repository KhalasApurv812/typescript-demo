type DemoProps = {
  name: string;
  count: number;
  isLoggin: boolean;
};

export default function Demo(props: DemoProps) {
  return (
    <div>
      <h1>
        {props.isLoggin
          ? `Welcom ${props.name} ! you have ${props.count} message.`
          : "Welcome Guest"}
      </h1>
    </div>
  );
}
