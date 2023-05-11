import { TextCard } from "@/components/molecules/TextCard";

export const PortraitCards = () => {
    return(
        <section className="container m-auto">
            <div className="border-solid border-2 border-black-600 max-h-[375px] max-w-[200px] lg:max-h-[375px] lg:max-w-[243.25px] rounded-[5px]">
                <div className="flex flex-col">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/02/surreal-photography-platon-yurich-13.jpg" alt="card-picture" className=" object-fill w-[265px] h-[149px]"/>
                    <TextCard />
                </div>
            </div>
        </section>
    );
}