import CarSearch from "../car-search";

interface HeaderProps {
  title: string;
  image_url?: string;
}

export default function Header({ title, image_url }: HeaderProps) {
  return (
    <div className="bg-white">
      <div className="h-[493px] flex w-full p-[61px] max-w-8xl mx-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-[62px] font-medium text-text-main max-w-[760px] z-10 tracking-tighter mb-[67px]">
            {title}
          </h1>
          <CarSearch />
        </div>

        <img
          src={image_url}
          alt="Main header image"
          className="absolute right-0 max-h-[368px]"
        />
      </div>
    </div>
  );
}
