import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 h-[910px] bg-white">
        <div className="flex justify-between items-center mb-[105px]">
          <h1 className="text-[30px] font-semibold">전체 모임</h1>
          <Link href="./find">
            <div className="flex border-2 border-[#43ABE5] text-[#43ABE5] font-semibold w-[120px] h-[40px] rounded-full justify-center items-center">
              일정 추가
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-y-[10px]">
          <div className="w-[225px] h-[220px] bg-[#EAF7FF] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
          <div className="w-[225px] h-[220px] bg-[#FFF0EA] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
          <div className="w-[225px] h-[220px] bg-[#FFF0EA] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
          <div className="w-[225px] h-[220px] bg-[#EAF7FF] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
          <div className="w-[225px] h-[220px] bg-[#EAF7FF] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
          <div className="w-[225px] h-[220px] bg-[#FFF0EA] rounded-[40px] p-5">
            <div className="py-[10px] font-semibold text-xl">
              스터디 그룹 모임
            </div>
            <div className="test-xl">그날 뵙겠습니다.</div>
          </div>
        </div>
      </div>
    </>
  );
}
