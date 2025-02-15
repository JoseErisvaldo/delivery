

export default function Title({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold m-5">{title}</h1>
    </div>
  );
}