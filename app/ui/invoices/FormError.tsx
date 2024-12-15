type Props = {
  id: string;
  errors: string[];
};

export function FormError({ id, errors }: Props) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
