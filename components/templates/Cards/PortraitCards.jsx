import { TextCards } from "@/components/molecules/TextCards";

export const PortraitCards = () => {
    return(
        <section className="container m-auto">
            <div className="border-solid border-2 border-black-600 lg:min-h-[361px] lg:w-[243.25px] rounded-[5px]">
                <div className="flex flex-col">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/02/surreal-photography-platon-yurich-13.jpg" alt="card-picture" className=" object-fill w-[265px] h-[149px]"/>
                    <TextCards />
                </div>
            </div>
        </section>
    );
}