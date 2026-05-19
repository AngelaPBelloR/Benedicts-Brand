export default function Slide() {
  return (
    <div className="bg-white relative size-full" data-name="Slide 1">
      <div className="-translate-x-1/2 absolute font-['Poppins:Black',sans-serif] h-[468px] leading-[0] left-[960px] not-italic text-[96px] text-black text-center top-[194px] w-[970px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Brand `}</p>
        <p className="leading-[normal]">Guidelines</p>
      </div>
      <div className="absolute bg-[#f5b61a] h-[432px] left-0 top-[662px] w-[1920px]" />
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold_Italic',sans-serif] h-[62px] italic leading-[normal] left-[949px] text-[32px] text-black text-center top-[882px] w-[908px]">Transliteration Recipes</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:Black',sans-serif] h-[139px] leading-[normal] left-[959.5px] not-italic text-[96px] text-center text-white top-[728px] w-[845px]">Benedict Eggs</p>
    </div>
  );
}