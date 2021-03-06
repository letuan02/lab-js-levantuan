import Header from "../../components/user/header";
import Footer from "../../components/user/footer";
import PostByCate from "../../components/user/postByCate";
import { categoryList, postList } from "../../data";

const NewsPage = {
    render(showAll = true, cateId = "") {
        if (!showAll) {
            // bài viết theo danh mục
            const cateData = categoryList.find((cate) => cate.id === cateId);

            return /* html */`
            ${Header.render()}

            <main class="container max-w-7xl mx-auto px-2">
                <h1 class="font-bold text-3xl my-9 uppercase text-center">Tin tức Poly - ${cateData.name}</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                    ${PostByCate.render(cateId)}
                </div>
            </main>

            ${Footer.render()}
            `;
        }

        return /* html */`
            ${Header.render()}
            
            <main class="container max-w-7xl mx-auto px-2">
                <h1 class="font-bold text-3xl my-9 uppercase text-center">Tin tức Poly</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                    ${postList.map((post) => `
                        <div class="border border-gray-300 p-3 transition duration-300 linear hover:border-red-400">
                            <div class="overflow-hidden">
                                <a href="/news/${post.id}" style="background-image: url('${post.image}');" class="block bg-no-repeat bg-center transition duration-300 ease-linear bg-cover hover:scale-105 pt-[65%]"></a>
                            </div>
            
                            <div>
                                <h3>
                                    <a href="/news/${post.id}" class="text-lg leading-6 block py-2 text-amber-700 font-medium transition hover:underline">${post.title}</a>
                                </h3>
                                <p class="text-justify pb-2">
                                    ${post.description.substr(0, 220)}...
                                </p>
                            </div>
                        </div>
                        `).join("")}
                </div>
            </main>

            ${Footer.render()}
            `;
    },
};

export default NewsPage;