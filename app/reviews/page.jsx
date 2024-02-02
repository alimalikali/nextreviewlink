import Link from "next/link";
import { getReviews } from "../../lib/review";
export const metadata= {
  title: 'review',
};
export default async function HomePage() {
  const reviews = await getReviews();
  // console.log(review);
  return (
    <>
      <h1 className="font-bold font-orbitron pb-3 text-2xl">Review</h1>
      <p>bloddiest games in then town</p>

      <ul className="flex flex-col gap-3">
        {reviews.map((review) => (
          <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href={`/reviews/${review.slug}`}>
              Hollow Knight
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
