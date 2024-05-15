export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center px-[32px] xl:px-[360px] py-[70px] bg-[#F0F6FF]">
      <div className="text-center text-[64px] font-bold">
        <p>
          세상의 모든 정보를 <br />
          쉽게 저장하고 관리해 보세요
        </p>
      </div>
      <button className="my-10 px-5 py-4 w-[350px] bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] rounded-md text-[18px] text-white">
        링크 추가하기
      </button>
      <img src="/images/hero.png" alt="hero" />
    </div>
  );
}
