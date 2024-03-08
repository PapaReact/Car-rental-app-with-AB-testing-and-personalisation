import CarDetailSection from "../../../components/sections/car-detail-section";
import ConsultationSection from "../../../components/sections/consultation-section";
import {getClient} from "../../../../lib/client";
import {GET_CATALOG_DATA} from "../../../../queries/get-catalog-data";
import {GET_CAR} from "../../../../queries/get-car";

export const revalidate = 0

async function getCarData(slug: string) {
  const client = getClient();
  let {data} = await client.query({
    query: GET_CAR,
    variables: {
      slug: slug
    }
  })

  return data;
}

export default async function CarDetailPage({params}) {
  const {slug} = params;
  const data = await getCarData(slug);
  const car = data.Car;

  return (
    <main>
      <meta property="prepr:id" content={car._id}/>
      <CarDetailSection title={car.title} price={car.monthly_price} img_url={car.image.url}/>
      <ConsultationSection/>
    </main>
  )
}
