interface Props {
  url: string;
}

export default function CarBox({url}: Props) {
  return (
    <div className="w-[844px] h-[435px] pt-11 flex items-center justify-center bg-blue-100 rounded-[10px]">
      <img src={url} alt="Car box" className="w-[716px] h-[318px] flex-shrink-0"/>
    </div>
  )
}
