import AdminNav from "../../../components/admin/nav";
import { categoryList, postList } from "../../../data";

const AdminNewsEditPage = {
    render(id) {
        const postDetails = postList.find((post) => post.id === id);

        return /* html */ `
        <div class="min-h-full">
            ${AdminNav.render("news")}
        
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 class="text-3xl font-bold text-gray-900">
                    Cập nhật bài viết
                    </h1>

                    <a href="/admin/news">
                        <button type="button" class="h-9 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Danh sách
                        </button>
                    </a>
                </div>
            </header>
            
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <form action="#" method="POST">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6">
                                            <label for="title" class="block text-sm font-medium text-gray-700">Tiêu đề bài viết</label>
                                            <input type="text" name="title" id="title" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tiêu đề bài viết" value="${postDetails.title}">
                                        </div>
            
                                        <div class="col-span-6">
                                            <label for="description" class="block text-sm font-medium text-gray-700">Mô tả</label>
                                            <textarea id="description" name="description" rows="3" class="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập mô tả bài viết">${postDetails.description}</textarea>
                                        </div>
            
                                        <div class="col-span-6 md:col-span-3">
                                            <label for="category" class="block text-sm font-medium text-gray-700">Danh mục bài viết</label>
                                            <select id="category" name="category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="">-- Chọn danh mục bài viết --</option>
                                                ${categoryList.map((cate) => `
                                                    <option value="${cate.id}" ${cate.id === postDetails.cate_id ? "selected" : ""} >${cate.name}</option>
                                                    `).join("")}
                                            </select>
                                        </div>
            
                                        <div class="col-span-6 md:col-span-3">
                                            <label for="status" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                                            <select id="status" name="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="">-- Chọn trạng thái bài viết --</option>
                                                <option value="0" ${!postDetails.status ? "selected" : ""}>Ẩn</option>
                                                <option value="1" ${postDetails.status ? "selected" : ""}>Hiển thị</option>
                                            </select>
                                        </div>

                                        <div class="col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Ảnh bìa hiện tại</label>
                                            <div class="mt-1">
                                                <img src="${postDetails.image}" alt="" class="h-60 w-full object-cover rounded-md">
                                            </div>
                                        </div>

                                        <div class="col-span-6">
                                            <label class="block text-sm font-medium text-gray-700">Ảnh bìa</label>
                                            <div class="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                        </label>
                                                        <p class="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Cập nhật bài viết
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
        `;
    },
};

export default AdminNewsEditPage;