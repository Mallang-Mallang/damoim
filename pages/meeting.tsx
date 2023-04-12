import Map from '@/components/common/Map';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ReactElement } from 'react';

const meeting = () => {
  return (
    <div className="w-full h-full px-4 py-5 overflow-auto">
      <div className="inner flex flex-col gap-8">
        <h1 className="text-xl font-semibold">
          모임장소를 <br />
          설정해주세요.
        </h1>
        <div className="relative w-full bg-transparent">
          <MagnifyingGlassIcon className="absolute w-5 h-5 top-1/4 left-2" />
          <input
            type="text"
            placeholder="도로명, 건물명 또는 지번으로 검색"
            className="w-full pl-8 py-2 pr-2 rounded-3xl bg-gray-200 placeholder-gray-400"
          />
        </div>
        <div className="w-full h-64 bg-gray-200 overflow-clip">
          {' '}
          <Map latitude={37.403331351471266} longitude={126.93067769029214} />
        </div>
        <br />
        <button className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white">
          <MapPinIcon className="absolute w-5 h-5" />
          현위치로 주소 설정
        </button>
        <Link href="./meeting2">
          <button className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
};

export default meeting;
