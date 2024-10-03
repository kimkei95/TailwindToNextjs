export default function Badge({ text, colorClass }) {
  return (
    <div className={`${colorClass} px-4 py-2 rounded-full text-sm font-medium`}>
      {text}
    </div>
  );
}
