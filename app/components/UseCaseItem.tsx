interface UseCaseItemProps {
  title: string;
  description: string;
  imageUrl: string;
  features: { name: string; description: string }[];
}

export default function UseCaseItem({
  title,
  description,
  features,
  imageUrl,
}: UseCaseItemProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-500">{description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1">
          <img src={imageUrl} alt={title} className="rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
