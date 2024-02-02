import Link from "next/link";
import {  getfeature } from "../lib/review";



export default async function HomePage() {
  const review = await getfeature();

  return (
    <>
    {/* <Head>
        <title>{metadata.title}</title>
    </Head> */}
      <div>

        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/reviews">review</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </div>
      <h1>Indie Gamer</h1>
      <ul>
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
      </ul>

      <p>best games in then town</p>
    </>
  );
}
