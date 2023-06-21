import { GETBookById } from '@/apis';
import useSWR from 'swr';

type FetcherKey = readonly [[string, string], string];

const fetcher = async ([[method, url], bookId]: FetcherKey) => GETBookById(bookId);

export const useGetBookById = (bookId: string) => useSWR([['GET', '/book/${bookdId}'], bookId], fetcher);