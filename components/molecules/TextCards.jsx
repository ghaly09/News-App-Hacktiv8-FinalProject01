export const TextCards = () => {
    return(
        <div className="px-2 py-1">
            <p className="text-xs font-semibold leading-[14px] text-[#4F4F4F] mb-[11px]">Medium.com</p>
            <h1 className="text-base font-semibold leading-[22px] text-[#000000] mb-[18px]">Spatial Visualization and Network Analysis with Geo Pandas Python</h1>
            <p className="text-[15px] font-[350px] leading-[20px] text-[#111111] mb-[14px]">Spatial data is used in geographical information systems (GIS) and other geolocation or positioning services. Spatial data consists of points, lines, polygons, and other geographic and geometric data primitives, which can be mapped by location. Spatial data may be classified as</p>
            <div className="flex items-center">
                <img className="w-[22px] h-[22px] rounded-full mr-2" src="https://th.bing.com/th/id/OIP.bWDXkUOfWj25pLwkhJqNGwHaLH?pid=ImgDet&rs=1" alt="Profile Picture" />
                <div className="flex flex-col font-semibold leading-[14px] mr-[.5em]">
                    <p className="text-[#4F4F4F] text-xs">Fendy Sanjaya</p>
                    <p className="text-[#828282] text-[10px]">February 05, 2023 &bull; 1000 min read</p>
                </div>
                <div className="flex justify-end">
                    <i className="fas fa-heart text-red-500"></i>
                </div>
            </div>
        </div>
    );
}