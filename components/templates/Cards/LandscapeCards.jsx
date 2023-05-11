import { TextCards } from "@/components/molecules/TextCards";

export const LandscapeCards = () => {
    return(
        <section className="container m-auto">
            <div className="border-solid border-2 border-black-600 lg:h-[265px] lg:w-[775px] rounded-[5px]">
                <div className="flex flex-row">
                    <div className="flex-1 flex-col mr-[-25px]">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/02/surreal-photography-platon-yurich-13.jpg" alt="card-picture" className=" object-fill w-[356px] h-[263px]"/>
                    </div>
                    <div className="flex-1 flex-col px-1 py-1 ">
                        <TextCards />
                    </div>
                </div>
            </div>
        </section>
    );
}