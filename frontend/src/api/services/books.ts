import { Book } from '../../types/books-types';
import { PaginatedResponse, PaginationParams } from '../../types/common-types';
import axiosInstance from '../axiosInstance';

const fetchAllBooks = async (params: PaginationParams) => {
    try {
        const response = await axiosInstance.get<PaginatedResponse<Book>>('/books/all', {
            params: params
        });
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

const getBookById = async (id: string | undefined) => {
    try {
        const response = await axiosInstance.get<Book>(`/books/${id}`);
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

const addBook = async (payload: Book) => {
    try {
        const response = await axiosInstance.post<Book>(`/books/create`, payload);
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

const deleteBook = async (bookId: number) => {
    try {
        const response = await axiosInstance.delete<Book>(`/books/${bookId}`);
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}

const fetchAllBooksBySearch = async (search: string) => {
    try {
        const response = await axiosInstance.get<PaginatedResponse<Book>>(`/books/search`, { params: { searchTerm: search }});
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
}
export { fetchAllBooks, getBookById, addBook, deleteBook, fetchAllBooksBySearch}