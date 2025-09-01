type Props = {
  items: Array<{
    text: string;
    icon: React.ReactNode;
  }>;
};

export function Topics({ items }: Props) {
  return (
    <div>
      <ul className="flex flex-wrap bg-white justify-around w-[90%] lg:w-[50%] px-8 py-3 shadow-md rounded-full mx-auto">
        {items.map((item, index) => (
          <li key={`topic_${index}`} className="text-center min-w-30 leading-5 mx-2">
            <div className="inline-block mx-auto">{item.icon}</div>
            <span className="text-sm block ml-2">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
