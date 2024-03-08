import CatalogSidebar from "../../components/catalog-sidebar";
import CatelogCategory from "../../components/catelog-category";
import CarCard from "../../components/car-card";
import ConsultationSection from "../../components/sections/consultation-section";
import {getClient} from "../../../lib/client";
import {GET_CATALOG_DATA} from "../../../queries/get-catalog-data";
import {CAR} from "../../types";

export const revalidate = 0

async function getCatalogData(category) {
  const client = getClient();
  let {data} = await client.query({
    query: GET_CATALOG_DATA,
    variables: {
      where: {
        categories: {
          _slug_any: category
        }
      }
    },
    fetchPolicy: 'no-cache'
  })

  return data;
}

export default async function CatalogPage({searchParams}) {
  const {category} = searchParams;
  const data = await getCatalogData(category);
  const cars = data.Cars.items;

  return (
    <main>
      <meta property="prepr:id" content="5f6783db-8ac0-4ba3-a30f-317b6d060272"/>
      <section className="bg-blue-50">
        <div className="max-w-8xl mx-auto pl-[78px] pt-[100px] pb-[220px]">
          <h1 className="text-[72px] font-medium transform-none mb-[62px]">Catalog</h1>
          <div className="flex gap-8">
            <CatalogSidebar/>

            <div className="flex flex-col gap-[35px]">
              <div className="flex gap-8">
                <CatelogCategory/>
                <CatelogCategory/>
                <CatelogCategory/>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {!cars.length && <div>No results found</div>}

                {cars.map((car: CAR) => <CarCard img_url={car.image.url} slug={car._slug} name={car.title} price={car.monthly_price} key={car._id} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationSection/>
    </main>
  )
}
