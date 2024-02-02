import Sharebutton from "../../../components/Sharebutton";
import { getReview, getSlugs } from "../../../lib/review";
// export const metadata= {
//   title: '',
// };
export async function generateStaticParams(){
  const slugs = await getSlugs();
  return slugs.map((slug)=> ({ slug }));
}
export async function generateMetadata({params:{slug}}){
  const review= await getReview(slug)
  return {
    title: review.title,
  };
}

export default async function HomePage({params:{slug}}) {
  const review= await getReview(slug)


  return (
    <>
    <Sharebutton />
      <p>{review.date}</p>
      <p>
        {review.title}
        <img
          src={review.image}
          alt=""
          width="320"
          height="180"
          className="rounded-t"
        />
        <h2 className="py-1  w-[200px]">
          <article className="" dangerouslySetInnerHTML={{ __html: review.body }} />
        </h2>
      </p>
    </>
  );
}
